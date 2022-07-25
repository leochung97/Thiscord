import React from 'react';
import Modal from 'react-modal';
import CreateServer from "./create_modal";

function ServerModal(props) {
  return (
    <Modal
      className="server-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closeTimeoutMS={50}
      ariaHideApp={false}
    >
      <CreateServer 
        closeModal={props.closeModal}
      />
    </Modal>
  )
}

export default ServerModal;