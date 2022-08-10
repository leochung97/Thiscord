import React from "react";
import User from "../../user/user";
import ChannelOptions from "./server_content_channel_options";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCurrentUser, logout } from "../../../actions/session_actions";
import {
  fetchServer,
  fetchServers,
  deleteServer,
} from "../../../actions/server_actions";
import { deleteServerMembership } from "../../../actions/server_membership_actions";
import { fetchConversations } from "../../../actions/conversation_actions";
import { openModal } from "../../../actions/modal_actions";
import { fetchChannel } from "../../../actions/channel_actions";

class ServerContent extends React.Component {
  constructor(props) {
    super(props);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.serverInfo = this.serverInfo.bind(this);
    this.serverOptions = this.serverOptions.bind(this);
  }

  serverOptions() {
    const dropdown_items = document.querySelector(".dropdown-container");
    if (dropdown_items) {
      dropdown_items.classList.add("show");
    }
  }

  closeDropdown() {
    const dropdown_items = document.querySelector(".dropdown-container");
    if (dropdown_items) {
      dropdown_items.classList.remove("show");
    }
  }

  handleLeave() {
    this.props.deleteServerMembership({
      user_id: this.props.currentUser.id,
      server_id: this.props.server.id,
    });
    this.props.history.push(`/channels/@me`);
  }

  dropdown() {
    let dropdown = "";
    if (this.props.server.owner_id === this.props.currentUser.id) {
      dropdown = (
        <div
          className="dropdown-container"
          onClick={() => this.closeDropdown()}
        >
          <div onClick={() => this.props.openModal("editServer")}>
            <div className="dropdown-option" id="server-settings">
              Server Settings
              <svg
                aria-hidden="false"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      );
    } else {
      dropdown = (
        <div
          className="dropdown-container"
          onClick={() => this.closeDropdown()}
        >
          <div onClick={() => this.handleLeave("leave")}>
            <div className="dropdown-option" id="leave-server">
              Leave Server
              <svg
                aria-hidden="false"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      );
    }
    return dropdown;
  }

  serverInfo() {
    return (
      <div>
        <div className="server-info-header">
          <h3>{this.props.server.name}</h3>
          <svg
            className="server-info-button"
            onClick={() => this.serverOptions()}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="14"
            width="14"
          >
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </div>

        <div className="server-dropdown">{this.dropdown()}</div>

        <div className="server-channels">
          <div className="server-nav-channels-header">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
              ></path>
            </svg>
            <div> TEXT CHANNELS</div>
            <svg
              aria-hidden="false"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              onClick={() => this.props.openModal("createChannel")}
            >
              <polygon
                fillRule="nonzero"
                fill="currentColor"
                points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
              ></polygon>
            </svg>
          </div>
          <ul>
            {this.props.channels.map((channel) => {
              return (
                <li
                  className="server-nav-channel"
                  key={channel.id}
                  onClick={() =>
                    this.props.history.push(
                      `/channels/${this.props.server.id}/${channel.id}`
                    )
                  }
                >
                  <div className="channel-handle">
                    <div className="channel-hashtag">
                      <svg width="20" height="20" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="server-nav-channel-name">
                      {channel.name.toLowerCase()}
                    </div>
                  </div>

                  {ChannelOptions(this.props)}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  friendsList() {
    return (
      <div>
        {props.conversations.map((conversation) => {
          return <div key={conversation.id}>{conversation.id}</div>;
        })}
      </div>
    );
  }

  render() {
    if (!this.props.server) {
      return null;
    }

    let infoDisplay;
    this.props.location.pathname === "/channels/@me" ||
    this.props.location.pathname === "/channels/@me/:dmServerId"
      ? (infoDisplay = this.friendsList)
      : (infoDisplay = this.serverInfo);

    return (
      <div className="server-content-shell">
        {infoDisplay()}
        <User />
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[ownProps.match.params.serverId],
    serverId: ownProps.match.params.serverId,
    channels: Object.values(state.entities.channels),
    conversations: Object.values(state.entities.conversations),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchConversations: () => dispatch(fetchConversations()),
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: (serverId) => dispatch(fetchServer(serverId)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    deleteServerMembership: (membership) =>
      dispatch(deleteServerMembership(membership)),
    fetchChannel: (id) => dispatch(fetchChannel(id)),
  };
};

export default withRouter(connect(mSTP, mDTP)(ServerContent));
