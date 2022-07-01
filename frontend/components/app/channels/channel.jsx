import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchChannel, fetchChannels, createChannel, deleteChannel } from "../../../actions/channel_actions";
import { deleteServer } from "../../../actions/server_actions";
import ChannelModal from "./channel_modal";
import ServerEditModal from "./server_edit_modal"

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { IsOpen: false, IsEditOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.removeChannel = this.removeChannel.bind(this);
    this.removeServer = this.removeServer.bind(this);
  }

  openModal() {
    this.setState({ IsOpen: true, IsEditOpen: false });
  }

  closeModal() {
    this.setState({ IsOpen: false, IsEditOpen: false });
  }

  openEditModal() {
    this.setState({ IsOpen: false, IsEditOpen: true });
  }

  closeEditModal() {
    this.setState({ IsOpen: false, IsEditOpen: false });
  }

  removeChannel(channelId) {
    this.props.deleteChannel(channelId)
  }

  removeServer(serverId) {
    this.props.deleteServer(serverId)
  }


  render() {
    const { server } = this.props;

    if (this.props.server) {
      return (
        <div className="sidebar-wrapper">
          <h1>{server.server_name}</h1>
          <div className="channels-wrapper">
            <div className="channels">
              <div className="channels-drop-container">
                <div className="channels-drop">TEXT CHANNELS</div>
                <button className="channels-create-button" onClick={this.openModal}>+</button>
              </div>
              <ul>
                {
                  server.channels.map(channel =>
                    <div key={channel.id}>
                      <li className="channels-list">
                        <img src="https://thiscord-assets.s3.amazonaws.com/icons8-hashtag-large-48.png" />
                        <Link to={`/channels/${this.props.match.params.serverId}/${channel.id}`}>{channel.channel_name}</Link>
                        <img src="https://thiscord-assets.s3.amazonaws.com/icons8-add-user-group-man-man-24.png" />
                        <img src="https://thiscord-assets.s3.amazonaws.com/icons8-settings-32.png" />
                      </li>
                    </div>
                  )
                }
              </ul>
            </div>
            <div className="sidebar-delete-server-container" onClick={this.openEditModal}>
              <div className="sidebar-delete-server" >Edit Server</div>
              <img src="https://thiscord-assets.s3.amazonaws.com/icons8-settings-32.png" />
            </div>
          </div>

          <ServerEditModal
            isOpen={this.state.IsEditOpen}
            closeModal={this.closeEditModal}
            server={this.props.server}
          />

          <ChannelModal
            isOpen={this.state.IsOpen}
            closeModal={this.closeModal}
          />

        </div>
      )
    }
  }
}

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  server: state.entities.servers.find(server => server.id === parseInt(ownProps.match.params.serverId)),
  channels: state.entities.channels,
  currentChannelId: ownProps.match.params.channelId
});

const mDTP = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId)),
  fetchChannels: serverId => dispatch(fetchChannels(serverId)),
  createChannel: channel => dispatch(createChannel(channel)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId)),
  deleteServer: serverId => dispatch(deleteServer(serverId))
});

export default withRouter(connect(mSTP, mDTP)(Channels));