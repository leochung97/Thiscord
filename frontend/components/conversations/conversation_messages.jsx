import React from "react";
import DirectMessage from "./direct_message";
import { connect } from "react-redux";

const ConversationMessages = (props) => {
  if (!props.messages) {
    return <div className="messages-body"></div>;
  }

  const messageProfile = (userId) => {
    let user = userId === props.user.id ? props.user : props.currentUser;
    if (!user) return null;
    let user_url = user.user_url;

    return (
      <img
        className="message-profile"
        src={user_url}
        alt="message user profile"
      />
    );
  };

  const messageDate = (timestamp) => {
    const timeStamp = timestamp.slice(0, 10).split("-");
    const year = timeStamp.shift();
    timeStamp.push(year);
    const date = timeStamp.join("/");
    return <div className="message-date">{date}</div>;
  };

  return (
    <div className="messages-body">
      <ul>
        {Object.values(props.messages).map((dm, idx) => {
          return (
            <li
              className="channel-message"
              key={idx.toString()}
              id={`directMessage-${dm.id}`}
            >
              {messageProfile(dm.user.id)}
              <div className="message-info-shell">
                <div className="message-info">
                  <div className="message-username">{dm.user.username}</div>
                  {messageDate(dm.created_at)}
                </div>
                <div className="message-body-shell" id={dm.id}>
                  <DirectMessage direct_message={dm} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mSTP = (state) => {
  return {
    messages: state.entities.direct_messages,
  };
};

export default connect(mSTP, null)(ConversationMessages);
