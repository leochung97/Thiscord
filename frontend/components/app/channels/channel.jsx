import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchChannels, createChannel, deleteChannel } from "../../../actions/channel_actions";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddChannel = this.handleAddChannel.bind(this);
  }

  componentDidMount(){
    this.props.fetchChannels(this.props.serverId)
  }

  handleAddChannel() {
    this.props.createChannel({
      channel_name: "new channel test"
    })
  }

  render() {
    const { channels } = this.props;
    return (
      <div>
        THIS IS BEING RETURNED AS CHANNELS
        <ul>
          {
            channels.map(channel =>
              <li key={channel.id}>
                <Link to={`/channels/${this.props.match.params.serverId}/${channel.id}`}>${channel.channel_name}</Link>
              </li>
            )
          }
          <li>
            <button className="channels-create-button" onClick={this.handleAddChannel}>Add a new channel</button>
          </li>
        </ul>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id,
  serverId: state.entities.servers,
  channels: state.entities.channels
});

const mDTP = dispatch => ({
  fetchChannels: serverId => dispatch(fetchChannels(serverId)),
  createChannel: channel => dispatch(createChannel(channel)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
});

export default withRouter(connect(mSTP, mDTP)(Channels));