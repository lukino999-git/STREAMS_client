import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {

  // cdm
  componentDidMount() {
    // from URL matching
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  // action buttons
  actions = () => {
    return (
      // <>...</> => short form of React.Fragment
      <>
        <Link to="/" className="ui button">CANCEL</Link>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          DELETE
        </button>
      </>
    );
  }

  // get modal
  getContent = () => {
    if (this.props.stream) {
      return `Are you sure you want to delete the stream: ${this.props.stream.title}?`
    }

    // if no stream
    return null;
  }

  // class render method
  render() {
    return (
      <Modal
        title="Delete stream"
        content={this.getContent()}
        actions={this.actions()}
        onDismiss={() => { history.push('/') }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);