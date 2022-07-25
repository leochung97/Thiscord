import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateServer, deleteServer } from "../../../actions/server_actions";

// function EditServer(props) {
//   const [state, setState] = useState(props.server)
  
//   const update = (field) => {
//     return (e) => setState(() => ({ ...state, [field]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.updateServer(state)
//       .then(() => {
//         props.closeModal();
//       })
//   }
// }

class EditServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.server;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ server_name: e.target.value });
  }

  // Would like to automatically load the new server name without having to refresh page
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateServer(this.state)
      .then(() => {
        this.props.closeModal();
        window.location.reload(false);
      })
  }

  removeServer(serverId) {
    this.props.deleteServer(serverId)
      .then(() => {
        this.props.closeModal();
        this.props.history.push("/channels/@me")
      })
  }

  render() {
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
              <input className="create-server-input" type="text" onChange={this.update} value={this.state.server_name} placeholder={`Server Name`} />
              <div className="modal-buttons-container">
                <button className="edit-server-delete" onClick={() => this.removeServer(this.props.server.id)}>Delete Server</button>
                <button className="create-server-exit" onClick={this.props.closeModal}>Close Menu</button>
                <button className="create-server-create" onClick={this.handleSubmit}>Update</button>
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
  updateServer: server => dispatch(updateServer(server)),
  deleteServer: serverId => dispatch(deleteServer(serverId))
});

export default withRouter(connect(mSTP, mDTP)(EditServer));