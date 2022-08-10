import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createConsumer } from "@rails/actioncable";
import { connect } from "react-redux";
import { fetchChannel } from "../../actions/channel_actions";
import { createMessage, updateMessage } from "../../actions/message_actions";
import ChannelMessageCreate from "./channel_message_create_container";
import ChannelMessageBody from "./channel_message_body_container";

const ChannelMessages = (props) => {
  if (!props.channel) {
    return null;
  }
  const [messages, setMessages] = useState([]);
  const params = useParams();

  useEffect(() => {
    props.fetchChannel(props.channel.id);
    // const cable = createConsumer("ws://localhost:3000/cable");
    const cable = createConsumer("ws://thiscord-leo.herokuapp.com");

    const paramsToSend = {
      channel: "ChannelChannel",
      id: props.channel.id,
    };

    const handlers = {
      received(data) {
        setMessages([...messages, data]);
      },

      connected() {
        // console.log("connected");
      },

      disconnected() {
        // console.log("disconnected");
      },
    };

    const subscription = cable.subscriptions.create(paramsToSend, handlers);

    return function cleanup() {
      console.log("unsubbing from ", params.channelId);
      subscription.unsubscribe();
    };
  }, [props.channel.id, messages]);

  const messageProfile = (userId) => {
    const user = props.users[userId];
    if (!user) return null;
    let user_url = user.user_url;

    return <img className="message-profile" src={user_url} />;
  };

  const messageDate = (timestamp) => {
    const timeStamp = timestamp.slice(0, 10).split("-");
    const year = timeStamp.shift();
    timeStamp.push(year);
    const date = timeStamp.join("/");
    return <div className="message-date">{date}</div>;
  };

  const content = () => {
    return (
      <div className="messages-body">
        <ul className="message-body-scroll">
          {Object.values(props.messages).map((message) => {
            return (
              <li
                className="channel-message"
                key={message.id * message.content.length * Math.random(10000)}
                id={`message-${message.id}`}
              >
                {messageProfile(message.user.id)}
                <div className="message-info-shell">
                  <div className="message-info">
                    <div className="message-username">
                      {message.user.username}
                    </div>
                    {messageDate(message.created_at)}
                  </div>
                  <div className="message-body-shell" id={message.id}>
                    <ChannelMessageBody message={message} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="channel-messages-shell">
      {content()}

      <ChannelMessageCreate channel={props.channel} />
    </div>
  );
};

const mSTP = (state) => {
  return {
    messages: state.entities.messages,
    users: state.entities.users,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    createMessage: (serverId, channelId, message) =>
      dispatch(createMessage(serverId, channelId, message)),
    updateMessage: (message) => dispatch(updateMessage(message)),
  };
};

export default connect(mSTP, mDTP)(ChannelMessages);
