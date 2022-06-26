import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import CreateServer from "./create_modal";

class ServerModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        className="server-modal"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
        <CreateServer 
          closeModal={this.props.closeModal}
        />
      </Modal>
    )
  }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default connect(null, null)(ServerModal);