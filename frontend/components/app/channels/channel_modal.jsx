import React from "react";
import Modal from "react-modal";
import CreateChannel from "./create_channel";

function ChannelModal(props) {
  return (
    <Modal
      className="server-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeoutMS={50}
      ariaHideApp={false}
    >
      <CreateChannel
        closeModal={props.closeModal}
      />
    </Modal>
  )
}

export default ChannelModal;