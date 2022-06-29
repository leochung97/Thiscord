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
    this.handleRemoveServer = this.handleRemoveServer.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers(this.props.currentUserId);
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

  handleRemoveServer(serverId) {
    this.props.deleteServer(serverId)
  }

  render() {
    const { servers } = this.props;

    return (
      <div className="overview-container">
        <div className="servers-container">
          <ul>
            <li>
              <div className="servers-home-button">
                <Link to="/channels/@me" className="servers-home-button"><img src="https://thiscord-assets.s3.amazonaws.com/icon_clyde_white_RGB.svg" /></Link>
              </div>
            </li>
            <div className="servers-separator"></div>
            {
              servers.map(server =>
                <li key={server.id}>
                  <Link to={`/channels/${server.id}`}>{server.server_name[0].toUpperCase()}</Link>
                </li>
              )
            }
            <div className="servers-separator"></div>
            <li className="modal-add-list" onClick={this.openModal}>
              <button className="modal-button">+</button>
            </li>
            <div className="servers-separator"></div>
            <li className="servers-logout-button" onClick={this.props.logout}>
              <img src="https://thiscord-assets.s3.amazonaws.com/icons8-enter-30.png" />
            </li>
          </ul>
          <ServerModal
            isOpen={this.state.IsOpen}
            closeModal={this.closeModal}
          />
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
  logout: () => dispatch(logout()),
  fetchServers: userId => dispatch(fetchServers(userId)),
  createServer: server => dispatch(createServer(server)),
  deleteServer: serverId => dispatch(deleteServer(serverId)),
});

export default connect(mSTP, mDTP)(Servers);