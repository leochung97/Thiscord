import React from "react";
import Modal from "react-modal";
import CreateChannel from "./create_channel";

class ChannelModal extends React.Component {
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
        <CreateChannel
          closeModal={this.props.closeModal}
        />
      </Modal>
    )
  }
}

export default ChannelModal;