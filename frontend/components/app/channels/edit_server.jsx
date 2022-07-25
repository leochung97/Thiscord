import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { updateServer, deleteServer } from "../../../actions/server_actions";

function EditServer(props) {
  const [state, setState] = useState(props.server)
  
  const history = useHistory();
  
  const update = (field) => {
    return (e) => setState(() => ({ ...state, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateServer(state)
      .then(() => {
        props.closeModal();
      })
  }

  const removeServer = (serverId) => {
    props.deleteServer(serverId)
      .then(() => {
        props.closeModal();
        history.push("/channels/@me")
      })
  }

  return (
    <div className="create-server-modal">
      <div className="create-server-wrapper">
        <div className="create-server-header-container">
          <h1>Edit your server</h1>
          <h3>Give your server a new personality or delete it!</h3>
        </div>
        <div className="modal-form-container">
          <h3>SERVER NAME</h3>
          <form className="modal-form">
            <input className="create-server-input" type="text" onChange={update} value={state.server_name} placeholder={`Server Name`} />
            <div className="modal-buttons-container">
              <button className="edit-server-delete" onClick={() => removeServer(props.server.id)}>Delete Server</button>
              <button className="create-server-exit" onClick={props.closeModal}>Close Menu</button>
              <button className="create-server-create" onClick={handleSubmit}>Update</button>
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
  updateServer: server => dispatch(updateServer(server)),
  deleteServer: serverId => dispatch(deleteServer(serverId))
});

export default withRouter(connect(mSTP, mDTP)(EditServer));