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
                <div className="servers-bubble">
                  {server.server_name[0].toUpperCase()}
                </div>
              )
            }
            <li className="modal-add-list" onClick={this.openModal}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path>
              </svg>
            </li>
            <li className="explore-public-servers">
              <svg width="24" height="24" viewbox="0 0 24 24">
                <path d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path>
              </svg>
            </li>
            <div className="servers-separator"></div>
            <li className="servers-logout-button" onClick={this.props.logout}>
              <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"></path>
              </svg>
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