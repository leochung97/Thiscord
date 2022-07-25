import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchChannel, fetchChannels, createChannel, deleteChannel } from "../../../actions/channel_actions";
import { deleteServer } from "../../../actions/server_actions";
import ChannelModal from "./channel_modal";
import ServerEditModal from "./server_edit_modal"

function Channels(props) {
  const [isOpen, setOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    setEditOpen(false);
  }

  const openEdit = () => {
    setOpen(false);
    setEditOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
    setEditOpen(false);
  }

  const removeChannel = channelId => {
    props.deleteChannel(channelId);
  };

  const removeServer = serverId => {
    props.deleteServer(serverId);
  }

  return (
    <div className="sidebar-wrapper">
      <h1>{ props.server.server_name }</h1>
      <div className="channels-wrapper">
        <div className="channels">
          <div className="channels-drop-container">
            <div className="channels-drop">TEXT CHANNELS</div>
            <button className="channels-create-button" onClick={openModal}>+</button>
          </div>
          <ul>
            {
              props.server.channels.map(channel =>
                <div>
                  <li className="channels-list" key={channel.id}>
                    <img src="https://thiscord-assets.s3.amazonaws.com/icons8-hashtag-large-48.png" />
                    <Link to={`/channels/${props.match.params.serverId}/${channel.id}`}>{channel.channel_name}</Link>
                    <img src="https://thiscord-assets.s3.amazonaws.com/icons8-add-user-group-man-man-24.png" />
                    <img src="https://thiscord-assets.s3.amazonaws.com/icons8-settings-32.png" />
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
}

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  currentChannelId: ownProps.match.params.channelId,
  server: state.entities.servers.find(server => server.id === parseInt(ownProps.match.params.serverId)),
  channels: state.entities.channels,
});

const mDTP = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId)),
  fetchChannels: serverId => dispatch(fetchChannels(serverId)),
  createChannel: channel => dispatch(createChannel(channel)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId)),
  deleteServer: serverId => dispatch(deleteServer(serverId))
});

export default withRouter(connect(mSTP, mDTP)(Channels));