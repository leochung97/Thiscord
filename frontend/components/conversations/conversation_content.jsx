import React from "react";
import User from "../user/user";
import { connect } from "react-redux";
import { fetchCurrentUser, logout } from "../../actions/session_actions";
import {
  fetchServer,
  fetchServers,
  deleteServer,
} from "../../actions/server_actions";
import { deleteServerMembership } from "../../actions/server_membership_actions";
import {
  fetchConversations,
  fetchConversation,
} from "../../actions/conversation_actions";
import { openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

class ConversationContent extends React.Component {
  constructor(props) {
    super(props);

    this.friendsList = this.friendsList.bind(this);
  }

  friendsList() {
    if (!this.props.conversations) {
      return null;
    }

    return (
      <div className="direct-messages-users-list-shell">
        <header>
          <h2>FIND OR START A CONVERSATION</h2>
        </header>

        <div className="friends-icon">
          <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
            <g fill="none" fillRule="evenodd">
              <path
                fill="currentColor"
                fillRule="nonzero"
                d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                transform="translate(2 4)"
              ></path>
              <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
            </g>
          </svg>
          <span>Friends</span>
        </div>

        <div className="direct-messages-header">
          <span>DIRECT MESSAGES</span>
          <svg
            x="0"
            y="0"
            aria-hidden="false"
            width="24"
            height="24"
            viewBox="0 0 18 18"
          >
            <polygon
              fillRule="nonzero"
              fill="currentColor"
              points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
            ></polygon>
          </svg>
        </div>

        {this.props.conversations.map((conversation) => {
          let userIds = Object.values(conversation.users);
          let userId = userIds.filter((user) => {
            if (user.id != this.props.currentUser.id) {
              return user;
            }
          });
          const user = conversation.users[userId[0].id];
          let user_url = user.user_url === "" ? window.default : user.user_url;

          return (
            <div
              key={conversation.id}
              onClick={() =>
                this.props.history.push(`/channels/@me/${conversation.id}`)
              }
              className="user-info-shell conversation-info-shell"
            >
              <img
                src={user_url}
                alt="profile picture"
                className="conversation-profile"
              />
              <div>{user.username}</div>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="server-content-shell">
        {this.friendsList()}
        <User />
      </div>
    );
  }
}

const currentUsersConversations = (state) => {
  if (
    Object.keys(state.entities.conversations).length <
    state.entities.users[state.session.id].conversations.length
  )
    return [];
  return state.entities.users[state.session.id].conversations.map(
    (conversationId) => state.entities.conversations[conversationId]
  );
};

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    channels: Object.values(state.entities.channels),
    conversations: currentUsersConversations(state),
    conversationsId: state.entities.users[state.session.id].ids,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id)),
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchConversations: () => dispatch(fetchConversations()),
    fetchConversation: (id) => dispatch(fetchConversation(id)),
    fetchServers: () => dispatch(fetchServers()),
    fetchServer: (id) => dispatch(fetchServer(id)),
    deleteServer: (id) => dispatch(deleteServer(id)),
    deleteServerMembership: (id) => dispatch(deleteServerMembership(id)),
  };
};

export default withRouter(connect(mSTP, mDTP)(ConversationContent));
