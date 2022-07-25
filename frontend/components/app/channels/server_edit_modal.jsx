import React from "react";
import Modal from "react-modal";
import EditServer from "./edit_server";

function ServerEditModal(props) {
  return (
    <Modal
      className="server-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeoutMS={50}
      ariaHideApp={false}
    >
      <EditServer
        closeModal={props.closeModal}
        server={props.server}
      />
    </Modal>
  )
}

export default ServerEditModal;