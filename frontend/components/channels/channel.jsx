import React from "react";
import ReactTooltip from "react-tooltip";
import ChannelMessages from "./channel_messages";
import { connect } from "react-redux";
import { createConversationParticipation } from "../../actions/conversation_participant_actions";
import { createConversation } from "../../actions/conversation_actions";
import { fetchServer } from "../../actions/server_actions";
import { fetchUser } from "../../actions/user_actions";

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.handleDirectMessage = this.handleDirectMessage.bind(this);
    this.conversationShell = this.conversationShell.bind(this);
  }

  handleDirectMessage(user) {
    let currentConversations = {};

    this.props.conversations.map((conversation) => {
      if (!conversation.users) {
        return null;
      }
      let participantIds = Object.keys(conversation.users);
      participantIds.map((participantId) => {
        if (participantId.toString() != this.props.currentUser.id.toString()) {
          currentConversations[participantId] = conversation.id;
        }
      });
    });

    if (currentConversations[user.id.toString()]) {
      this.props.history.push(
        `/channels/@me/${currentConversations[user.id.toString()]}`
      );
    } else {
      this.props.createConversation().then((response) => {
        let conversationParticipation = {
          conversation_id: response.conversation.id,
          participant_id: this.props.currentUser.id,
        };
        this.props.createConversationParticipation(conversationParticipation);
        let newConversationParticipation = {
          conversation_id: response.conversation.id,
          participant_id: user.id,
        };
        this.props
          .createConversationParticipation(newConversationParticipation)
          .then((response2) => {
            this.props.history.push(
              `/channels/@me/${response2.conversationParticipation.conversation_id}`
            );
          });
      });
    }
  }

  conversationShell(user) {
    if (user.id.toString() !== this.props.currentUser.id.toString()) {
      return (
        <div
          className="server-user-dm"
          onClick={() => this.handleDirectMessage(user)}
        >
          Direct Message
        </div>
      );
    }
  }

  usersList() {
    if (!this.props.users) {
      return null;
    }
    return (
      <div className="users-list-shell">
        <div className="users-list-header">
          MEMBERS - {this.props.users.length}
        </div>
        <ul className="users-list">
          {this.props.users.map((user) => {
            let user_url =
              user.user_url === "" ? window.default : user.user_url;
            return (
              <div key={user.id} className="server-user-info">
                <img src={user_url} alt="profile picture" />
                <div>{user.username}</div>
                {this.conversationShell(user)}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
  render() {
    if (!this.props.channel) return null;

    return (
      <div className="channel-shell">
        <div className="channel-header">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            x="0"
            y="0"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
            ></path>
          </svg>
          <div className="channel-name">{this.props.channel.name}</div>
          <div className="space"></div>

          <div className="channel-icons">
            <svg
              data-tip
              data-for="tt-icons"
              x="0"
              y="0"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"
              ></path>
              <path
                fill="currentColor"
                d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"
              ></path>
            </svg>

            <svg
              data-tip
              data-for="tt-icons"
              x="0"
              y="0"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.178 1.70703L22.592 3.12103L4.12103 21.593L2.70703 20.178L21.178 1.70703Z"
              ></path>
              <path
                fill="currentColor"
                d="M18 10.5283L10.5287 18H21V17C19.344 17 18 15.657 18 14V10.5283Z"
              ></path>
              <path
                fill="currentColor"
                d="M8.957 19.5718L9.52877 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21C10.7748 21 9.68752 20.442 8.957 19.5718Z"
              ></path>
              <path
                fill="currentColor"
                d="M12 3C13.417 3 14.71 3.5 15.734 4.321L5.99805 14.058C5.99805 14.0479 5.99856 14.038 5.99907 14.0283C5.99956 14.0188 6.00005 14.0094 6.00005 14V9C6.00005 5.686 8.68605 3 12 3Z"
              ></path>
            </svg>

            <svg
              data-tip
              data-for="tt-icons"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
              ></path>
            </svg>

            <svg
              data-tip
              data-for="tt-icons"
              x="0"
              y="0"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
              ></path>
              <path
                fill="currentColor"
                d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
              ></path>
              <path
                fill="currentColor"
                d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
              ></path>
            </svg>

            <div data-tip data-for="tt-icons" className="channel-search-bar">
              <span>Search</span>
              <svg
                aria-hidden="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"
                ></path>
              </svg>
            </div>

            <svg
              data-tip
              data-for="tt-icons"
              x="0"
              y="0"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <a
            className="about-link"
            href="https://github.com/leochung97/Thiscord"
            data-tip
            data-for="tt-about"
            target="_blank"
          >
            <svg
              x="0"
              y="0"
              aria-hidden="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
              ></path>
            </svg>
          </a>
        </div>
        <ReactTooltip
          id="tt-icons"
          place="bottom"
          type="dark"
          effect="solid"
          backgroundColor="#202225"
        >
          <span>To be updated!</span>
        </ReactTooltip>
        <ReactTooltip
          id="tt-about"
          place="bottom"
          type="dark"
          effect="solid"
          backgroundColor="#202225"
        >
          <span>Project GitHub</span>
        </ReactTooltip>

        <div className="channel-content-shell">
          <ChannelMessages channel={this.props.channel} />
          {this.usersList()}
        </div>
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

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    server: state.entities.servers[ownProps.match.params.serverId],
    channel: state.entities.channels[ownProps.match.params.channelId],
    serverId: ownProps.match.params.serverId,
    conversations: currentUsersConversations(state),
    users: Object.values(state.entities.users),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchServer: (id) => dispatch(fetchServer(id)),
    createConversation: () => dispatch(createConversation()),
    createConversationParticipation: (dm) =>
      dispatch(createConversationParticipation(dm)),
  };
};

export default connect(mSTP, mDTP)(Channel);
