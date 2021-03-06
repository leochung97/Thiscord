import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchChannel, fetchChannels, createChannel, deleteChannel } from "../../../actions/channel_actions";
import { fetchServer, deleteServer } from "../../../actions/server_actions";
import ChannelModal from "./channel_modal";
import ServerEditModal from "./server_edit_modal"

function Channels(props) {
  const [isOpen, setOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const history = useHistory();
1
  const openModal = () => {
    setOpen(true);
    setEditOpen(false);
  };

  const openEdit = () => {
    setOpen(false);
    setEditOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setEditOpen(false);
  };

  if (props.server) {
    return (
      <div className="sidebar-wrapper">
        <h1>{ props.server.server_name }</h1>
        <div className="channels-wrapper">
          <div className="channels">
            <div className="channels-drop-container" onClick={openModal}>
              <svg className="channels-chevron" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z" />
              </svg>
              <div className="channels-drop">TEXT CHANNELS</div>
              <svg className="channels-create-button" aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">
                <polygon fillRule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon>
              </svg>
            </div>
            <ul>
              {
                props.server.channels.map(channel =>
                  <div key={channel.id}>
                    <li className="channels-list">
                      <svg className="hashtag" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z" />
                      </svg>
                      <Link to={`/channels/${props.match.params.serverId}/${channel.id}`}>{channel.channel_name}</Link>
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"></path><path fill="currentColor" d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"></path><path fill="currentColor" d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z" />
                      </svg>
                      <svg aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" />
                      </svg>
                    </li>
                  </div>
                )
              }
            </ul>
          </div>
          <div className="sidebar-delete-server-container" onClick={openEdit}>
            <div className="sidebar-delete-server">Edit Server</div>
            <img src="https://thiscord-assets.s3.amazonaws.com/icons8-settings-32.png" />
          </div>
        </div>

        <ServerEditModal
          isOpen={isEditOpen}
          closeModal={closeModal}
          server={props.server}
        />

        <ChannelModal
          isOpen={isOpen}
          closeModal={closeModal}
        />

      </div>
    )
  } else {
    history.push("/channels/@me")
  }
}

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  currentChannelId: ownProps.match.params.channelId,
  server: state.entities.servers.find(server => server.id === parseInt(ownProps.match.params.serverId)),
  channels: state.entities.channels,
});

const mDTP = dispatch => ({
  fetchServer: serverId => dispatch(fetchServer(serverId)),
  fetchChannel: channelId => dispatch(fetchChannel(channelId)),
  fetchChannels: serverId => dispatch(fetchChannels(serverId)),
  createChannel: channel => dispatch(createChannel(channel)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId)),
  deleteServer: serverId => dispatch(deleteServer(serverId))
});

export default withRouter(connect(mSTP, mDTP)(Channels));