import React from 'react';
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
        closeTimeoutMS={50}
        ariaHideApp={false}
      >
        <CreateServer 
          closeModal={this.props.closeModal}
        />
      </Modal>
    )
  }
}

export default ServerModal;