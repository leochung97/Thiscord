import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ChannelChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.bottom = React.createRef();
    this.loadChat = this.loadChat.bind(this);
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
              break;
            case "messages":
              this.setState({ messages: data.messages });
              break;
          }
        },
        speak: function(data) { return this.perform("speak", data) },
        load: function() { return this.perform("load") }
      }
    );
    App.cable.subscriptions.subscriptions[0].load();
  }

  loadChat(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  }

  componentDidUpdate() {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  render() {
    const serverId = this.props.match.url.charAt(this.props.match.url.length - 1);
    const server = this.props.servers.find(server => server.id === parseInt(serverId))
    
    return (
      <div className="chatroom-container">
        <div className="message-list">
          {
            this.state.messages.map((message, idx) => 
              <li key={message.id}>
                <div className="user-avatar-container">
                  <img src="https://thiscord-assets.s3.amazonaws.com/icon_clyde_white_RGB.svg" />
                </div>
                {message}
                <div ref={this.bottom} />
              </li>
          )}
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  servers: state.entities.servers,
  channels: state.entities.channels,
  currentChannelId: parseInt(ownProps.match.params.channelId)
});

const mDTP = dispatch => ({

});

export default withRouter(connect(mSTP, mDTP)(ChannelChat));