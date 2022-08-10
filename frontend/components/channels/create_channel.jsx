import React, { useState } from "react";
import { connect } from "react-redux";
import { createChannel } from "../../actions/channel_actions";
import { closeModal } from "../../actions/modal_actions";

const CreateChannel = (props) => {
  const [name, setName] = useState("");
  let urlElements = window.location.href.split("/");
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let channel = { name: name };
    props.createChannel(channel, urlElements[5]).then((channel) => {
      setName("");
      props.closeModal();
    });
  };

  return (
    <div className="create-channel-container">
      <svg
        className="close-button"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={() => props.closeModal()}
      >
        <path
          fill="currentColor"
          d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
        ></path>
      </svg>
      <header className="create-channel-header">
        <h2>Create Text Channel</h2>
      </header>
      <form className="channel-create-form" onSubmit={(e) => handleSubmit(e)}>
        <label>CHANNEL NAME</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <div className="channel-create-footer">
          <div onClick={() => props.closeModal()}>Cancel</div>
          <button type="submit">Create Channel</button>
        </div>
      </form>
    </div>
  );
};

const mDTP = (dispatch) => {
  return {
    createChannel: (channel, serverId) =>
      dispatch(createChannel(channel, serverId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mDTP)(CreateChannel);
