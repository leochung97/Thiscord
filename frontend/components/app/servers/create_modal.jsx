import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { createServer } from "../../../actions/server_actions";

function CreateServer(props) {
  const [state, setState] = useState({ server_name: '' });
  const history = useHistory();

  const update = (e) => {
    e.preventDefault();
    setState({ server_name: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createServer(state)
      .then(({ server }) => {
        props.closeModal();
        history.push(`/channels/${server.id}`)
      })
  }

  return (
    <div className="create-server-modal">
      <div className="create-server-wrapper">
        <div className="create-server-header-container">
          <h1>Customize your server</h1>
          <h3>Give your new server a personality with a name. You can always change it later.</h3>
        </div>
        <div className="modal-form-container">
          <h3>SERVER NAME</h3>
          <form onSubmit={handleSubmit} className="modal-form">
            <input className="create-server-input" type="text" onChange={update} value={state.server_name} placeholder={`Server Name`} />
            <div>By creating a server, you agree to Thiscord's <a href="">Community Guidelines.</a></div>
            <div className="modal-buttons-container">
              <button className="create-server-exit" onClick={props.closeModal}>Back</button>
              <button className="create-server-create" type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mSTP = state => ({
  currentUserId: state.session.id,
  errors: state.errors.server,
});

const mDTP = dispatch => ({
  createServer: server => dispatch(createServer(server)),
});

export default withRouter(connect(mSTP, mDTP)(CreateServer));