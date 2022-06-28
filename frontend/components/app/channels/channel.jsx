import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchChannel, fetchChannels, createChannel, deleteChannel } from "../../../actions/channel_actions";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddChannel = this.handleAddChannel.bind(this);
  }

  handleAddChannel() {
    this.props.createChannel({
      channel_name: "new test",
      server_id: 1
    })
  }

  render() {
    const { server } = this.props;
    console.log(this.props);

    if (this.props.server) {
      return (
        <div className="sidebar-wrapper">
          <h1>{server.server_name}</h1>
          <div className="channels-wrapper">
            <div className="channels">
              <div className="channels-drop-container">
                <div className="channels-drop">TEXT CHANNELS</div>
                <button className="channels-create-button" onClick={this.handleAddChannel}>+</button>
              </div>
              <ul>
                {
                  server.channels.map(channel =>
                    <div key={channel.id}>
                      <li className="channels-list">
                        <Link to={`/channels/${this.props.match.params.serverId}/${channel.id}`}># ${channel.channel_name}</Link>
                      </li>
                    </div>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  server: state.entities.servers.find(server => server.id === parseInt(ownProps.match.params.serverId)),
  currentChannelId: ownProps.match.params.channelId
});

const mDTP = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId)),
  fetchChannels: serverId => dispatch(fetchChannels(serverId)),
  createChannel: channel => dispatch(createChannel(channel)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
});

export default withRouter(connect(mSTP, mDTP)(Channels));