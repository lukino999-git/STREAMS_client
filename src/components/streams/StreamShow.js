import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }


  // cdm
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.fetchStream(id);

    this.buildPlayer();
  }


  // cdu
  componentDidUpdate() {
    this.buildPlayer();
  }


  // conditionally build player
  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const id = this.props.match.params.id;
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();

  }


  //cwu
  componentWillUnmount() {
    this.player.destroy();
  }


  // class render method
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <video
          controls
          ref={this.videoRef}
          style={{ width: '100%' }}
        />
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);