import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createChannel } from "../../../actions/channel_actions";

class CreateChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel_name: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ channel_name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.createChannel({ 
      channel_name: this.state.channel_name,
      server_id: this.props.server.id
    }).then(({ channel }) => {
        this.props.closeModal();
        this.props.history.push(`/${server.id}/${channel.id}`);
      })
  }

  render() {
    return (
      <div className="create-channel-modal">
        <div className="create-channel-wrapper">
          <div className="create-channel-header-container">
            <h1>Create Channel</h1>
            <h3>in Text Channels</h3>
          </div>
          <div className="create-channel-button-container">
            <div className="create-channel-text-container">
              <img src="https://thiscord-assets.s3.amazonaws.com/icons8-hashtag-large-48.png" />
              <div>
                <h1>Text</h1>
                <h3>Send messages, images, GIFs, emoji, opinions, and puns</h3>
              </div>
            </div>
            <div className="create-channel-voice-container">
              <img src="https://thiscord-assets.s3.amazonaws.com/icons8-speaker-24.png" />
              <div>
                <h1>Voice</h1>
                <h3>Hang out together with voice, video, and screen share</h3>
              </div>
            </div>
            <form className="channel-modal-form" onSubmit={this.handleSubmit}>
              <div className="create-channel-form-container">
                <h3>CHANNEL NAME</h3>
                <div className="create-channel-input-wrapper">
                  <img src="https://thiscord-assets.s3.amazonaws.com/icons8-hashtag-large-48.png" />
                  <input className="create-channel-input" type="text" onChange={this.update} value={this.state.channel_name} placeholder="new-channel"></input>
                </div>
              </div>
              <div className="create-channel-footer">
                <button className="create-channel-exit" onClick={this.props.closeModal}>Back</button>
                <button className="create-channel-create" type="submit">Create Channel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  server: state.entities.servers.find(server => server.id === parseInt(ownProps.match.params.serverId))
});

const mDTP = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default withRouter(connect(mSTP, mDTP)(CreateChannel));