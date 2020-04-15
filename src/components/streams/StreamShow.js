import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    console.log('Render: stream', this.props.stream);
    if (!this.props.stream) {
      console.log("No stream");
      return <div>Loading...</div>
    }

    console.log("Habemus stream");
    return (
      <div>
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