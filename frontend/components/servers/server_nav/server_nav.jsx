import React from "react";
import ReactTooltip from "react-tooltip";
import ServerNavList from "./server_nav_list";
import { matchPath } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchServer, fetchServers } from "../../../actions/server_actions";
import { fetchCurrentUser, logout } from "../../../actions/session_actions";
import { openModal } from "../../../actions/modal_actions";
import {
  fetchConversation,
  fetchConversations,
} from "../../../actions/conversation_actions";

class ServerNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servers: "",
    };
  }

  componentDidMount() {
    const match = matchPath(this.props.history.location.pathname, {
      path: `/channels/:serverid/channelId`,
    });
    this.props.fetchConversations();
    this.props.fetchServers();
    this.props.currentUser.servers.map((serverId) => {
      this.props.fetchServer(serverId).then(() => {
        if (match && match.params.serverId !== "@me") {
          this.props.fetchServer(match.params.serverId).then(() => {
            this.setState({ servers: this.state.servers });
          });
        }
      });
    });
  }

  render() {
    if (!this.props.currentUser.servers) {
      return null;
    }
    return (
      <div className="server-navigation-container">
        <div className="server-navigation-bar-container">
          <div
            className="server-navigation-button server-navigation-icon-button"
            title="Home"
            onClick={() => {
              this.props.history.push("/channels/@me");
            }}
          >
            <svg aria-hidden="false" width="28" height="20" viewBox="0 0 28 20">
              <path
                fill="currentColor"
                d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"
              ></path>
            </svg>
          </div>

          <div className="line-gap"></div>

          {ServerNavList(this.props)}

          <div
            data-tip
            data-for="tt-addserver"
            className="server-navigation-button server-extra-button"
            onClick={() => this.props.openModal("formServer")}
          >
            <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
              ></path>
            </svg>
          </div>
          <ReactTooltip
            id="tt-addserver"
            place="right"
            type="dark"
            effect="solid"
            backgroundColor="#202225"
          >
            <span>Add a Server</span>
          </ReactTooltip>

          <div
            data-tip
            data-for="tt-discoverserver"
            className="server-navigation-button server-extra-button"
            onClick={() => this.props.openModal("indexServer")}
          >
            <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
              ></path>
            </svg>
          </div>
          <ReactTooltip
            id="tt-discoverserver"
            place="right"
            type="dark"
            effect="solid"
            backgroundColor="#202225"
          >
            <span>Discover Servers</span>
          </ReactTooltip>

          <div className="line-gap"></div>

          <div
            data-tip
            data-for="tt-download"
            className="server-navigation-button server-extra-button"
          >
            <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"
              ></path>
            </svg>
          </div>
          <ReactTooltip
            id="tt-download"
            place="right"
            type="dark"
            effect="solid"
            backgroundColor="#202225"
          >
            <span>Download Functionality not added yet!</span>
          </ReactTooltip>
        </div>
      </div>
    );
  }
}

const currentUsersServers = (state) => {
  if (
    Object.keys(state.entities.servers).length <
    state.entities.users[state.session.id].servers.length
  )
    return [];
  return state.entities.users[state.session.id].servers.map(
    (serverId) => state.entities.servers[serverId]
  );
};

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    servers: currentUsersServers(state),
    allServers: state.entities.servers,
    serversId: state.entities.users[state.session.id].ids,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
    fetchConversations: () => dispatch(fetchConversations()),
    fetchConversation: (conversationId) =>
      dispatch(fetchConversation(conversationId)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(mSTP, mDTP)(ServerNav));
