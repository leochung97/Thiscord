import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { fetchServers } from "../../../actions/server_actions";
import ChannelChat from "./channel_chat"

class ChannelMessages extends React.Component {
  constructor(props) {
    super(props);
    this.setBGColor = this.setBGColor.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers(this.props.currentUserId);
  }

  setBGColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  }

  render() {
    const serverId = this.props.match.url.charAt(this.props.match.url.length - 1);
    const server = this.props.servers.find(server => server.id === parseInt(serverId))

    return (
      <div className="channel-messages-wrapper">
        <div className="channel-messages-header">
          Header goes here
        </div>
        <div className="channel-messages-body">
          <div className="channel-messages-container">
            <Switch>
              <Route path="/channels/:serverId/:channelId" component={ChannelChat} />
            </Switch>
            <div className="channel-messages-form-container">
              <form className="channel-messages-form">
                Input Bar
                <img />
                <input className="channel-messages-input">Message #all-topics</input>
                <img />
                <img />
                <img />
                <img />
              </form>
            </div>
          </div>
          <div className="channel-users-container">
            <ul>
              {
                server ?
                  server.members.map(member => 
                    <li key={member.id} className="members-list">
                      <div>
                        <img src="https://thiscord-assets.s3.amazonaws.com/icon_clyde_white_RGB.svg" />
                      </div>
                      {member.username}
                    </li>
                  )
                :
                null
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id,
  servers: state.entities.servers,
});

const mDTP = dispatch => ({
  fetchServers: userId => dispatch(fetchServers(userId)),
});

export default withRouter(connect(mSTP, mDTP)(ChannelMessages));