import React from "react";
import Modal from "react-modal";
import EditServer from "./edit_server";

class ServerEditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        className="server-modal"
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        closetimeoutMS={50}
        ariaHideApp={false}
      >
        <EditServer
          closeModal={this.props.closeModal}
          server={this.props.server}
        />
      </Modal>
    )
  }
}

export default ServerEditModal;