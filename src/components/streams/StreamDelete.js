import React from 'react';
import Modal from '../Modal';
import history from '../../history';


function StreamDelete() {

  const actions = (
    // <> short form of React.Fragment </>
    <>
      <button className="ui button">CANCEL</button>
      <button className="ui button negative">DELETE</button>
    </>
  )

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete stream"
        content="Are you sure you want to delete this stream?"
        actions={actions}
        onDismiss={() => { history.push('/') }}
      />
    </div>
  )
}

export default StreamDelete;