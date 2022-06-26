import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/session_actions";
import { fetchServers, createServer, deleteServer } from "../../../actions/server_actions";
import ServerModal from "./server_modal";

class Servers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { IsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAddServer = this.handleAddServer.bind(this);
    this.handleRemoveServer = this.handleRemoveServer.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers(this.props.currentUserId);
  }

  componentDidUpdate() {
    
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  openModal() {
    this.setState({ IsOpen: true });
  }

  closeModal() {
    this.setState({ IsOpen: false });
  }

  handleAddServer() {
    this.props.createServer({
      server_name: "new server test",
    })
  }

  handleRemoveServer(serverId) {
    this.props.deleteServer(serverId)
  }

  render() {
    const { servers } = this.props;

    return (
      <div className="servers-container">
        <Link to="/channels/@me" className="servers-home-button">Home</Link>
        <ul>
          {
            servers.map(server =>
              <li key={server.id}>
                <Link to={`/channels/${server.id}`}>{server.server_name}</Link>
                <button onClick={() => this.handleRemoveServer(server.id)}>DELETE</button>
              </li>
            )
          }
        </ul>
        <div className="servers-create-container">
          <button className="servers-create-button" onClick={this.handleAddServer}>Add a Server</button>
        </div>
        <div className="servers-logout-button" onClick={this.props.logout}>
          <button>
            Logout
          </button>
        </div>
        <button onClick={this.openModal}>OPEN MODAL</button>
        <ServerModal
          isOpen={this.state.IsOpen}
          closeModal={this.closeModal}
        />
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id,
  servers: state.entities.servers,
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchServers: userId => dispatch(fetchServers(userId)),
  createServer: server => dispatch(createServer(server)),
  deleteServer: serverId => dispatch(deleteServer(serverId)),
});

export default connect(mSTP, mDTP)(Servers);