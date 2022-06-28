import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchChannel, createChannel, deleteChannel } from "../../../actions/channel_actions";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddChannel = this.handleAddChannel.bind(this);
  }

  componentDidMount(){
    console.log(this.props);
  }

  handleAddChannel() {
    this.props.createChannel({
      channel_name: "new test",
      server_id: 1
    })
  }

  render() {
    const { channels } = this.props;
    if (this.props.server) {
      return (
        <div className="sidebar-wrapper">
          <h1>{this.props.server.server_name}</h1>
          <div className="channels-wrapper">
            <div className="channels">
              <div className="channels-drop-container">
                <div className="channels-drop">TEXT CHANNELS</div>
                <button className="channels-create-button" onClick={this.handleAddChannel}>+</button>
              </div>
              <ul>
                {
                  channels.map(channel =>
                    <div key={channel.id}>
                      <li className="channels-list">
                        <Link to={`/channels/${this.props.match.params.serverId}/${channel.id}`}># ${channel.channel_name}</Link>
                      </li>
                    </div>
                  )
                }
                {console.log(channels)}
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
  server: state.entities.servers[ownProps.match.params.serverId],
  channels: state.entities.channels,
  currentChannelId: ownProps.match.params.channelId
});

const mDTP = dispatch => ({
  fetchChannel: channelId => dispatch(fetchChannel(channelId)),
  createChannel: channel => dispatch(createChannel(channel)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
});

export default withRouter(connect(mSTP, mDTP)(Channels));