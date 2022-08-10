import React, { useState } from "react";
import { connect } from "react-redux";
import { updateChannel, deleteChannel } from "../../actions/channel_actions";
import { closeModal } from "../../actions/modal_actions";

const EditChannel = (props) => {
  const getServer = () => {
    let location = props.history.location.pathname.split("/");
    let serverId = location[2];
    return props.servers[serverId];
  };

  const getChannel = () => {
    let location = props.history.location.pathname.split("/");
    let channelId = location[3];
    return props.channels[channelId];
  };

  const server = getServer();
  const channel = getChannel();
  const [channelName, setChannelName] = useState(channel.name);

  const handleDelete = () => {
    props.deleteChannel(channel.id).then(() => {
      const firstChannel = Object.keys(server.channels)[0];
      props.history.push(`/channels/${server.id}/${firstChannel}`);
    });
    props.closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    channel.name = channelName;

    props.updateChannel(channel);
    props.closeModal();
  };

  return (
    <div className="channel-options">
      <div className="close-button-circle">
        <div
          className="close-button-svg-container"
          onClick={() => props.closeModal()}
        >
          <svg
            className="close-button-circle-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
            ></path>
          </svg>
        </div>
        <div id="esc">ESC</div>
      </div>
      <div className="edit-channel-sidebar-container">
        <div className="edit-channel-sidebar">
          <header className="edit-channel-sidebar-header">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              className="edit-channel-hashtag"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
              ></path>
            </svg>
            <div>
              {channel.name.toUpperCase()}
            </div>
            <span>TEXT CHANNELS</span>
          </header>
          <main className="edit-channel-sidebar-main">
            <div className="edit-sidebar-content">Overview</div>
            <div className="edit-channel-separator"></div>
            <div
              onClick={handleDelete}
              className="edit-channel-delete edit-sidebar-content"
            >
              Delete Channel
              <svg
                aria-hidden="false"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z"
                ></path>
              </svg>
            </div>
          </main>
        </div>
      </div>
      <main className="edit-channel-main-container">
        <h3>OVERVIEW</h3>
        <form onSubmit={handleSubmit} className="edit-channel-form">
          <label>CHANNEL NAME</label>
          <input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />
          <div className="channel-create-footer" id="edit-channel-form-thing">
            <button type="submit">Change Channel Name</button>
          </div>
        </form>
      </main>
    </div>
  );
};

const mSTP = (state) => {
  return {
    servers: state.entities.servers,
    channels: state.entities.channels,
  };
};

const mDTP = (dispatch) => {
  return {
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(EditChannel);
