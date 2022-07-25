import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { createChannel } from "../../../actions/channel_actions";

function CreateChannel(props) {
  const [state, setState] = useState({ channel_name: '' });
  const history = useHistory();

  const update = (e) => {
    e.preventDefault();
    setState( {channel_name: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createChannel({
      channel_name: state.channel_name,
      server_id: props.server.id
    }).then(({ channel }) => {
      props.closeModal();
      history.push(`/channels/${channel.server_id}/${channel.id}`);
      });
  }

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
          <form className="channel-modal-form" onSubmit={handleSubmit}>
            <div className="create-channel-form-container">
              <h3>CHANNEL NAME</h3>
              <div className="create-channel-input-wrapper">
                <img src="https://thiscord-assets.s3.amazonaws.com/icons8-hashtag-large-48.png" />
                <input className="create-channel-input" type="text" onChange={update} value={state.channel_name} placeholder="new-channel"></input>
              </div>
            </div>
            <div className="create-channel-footer">
              <button className="create-channel-exit" onClick={props.closeModal}>Back</button>
              <button className="create-channel-create" type="submit">Create Channel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  server: state.entities.servers.find(server => server.id === parseInt(ownProps.match.params.serverId))
});

const mDTP = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default withRouter(connect(mSTP, mDTP)(CreateChannel));