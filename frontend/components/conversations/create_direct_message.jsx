import React, { useState } from "react";
import { connect } from "react-redux";
import { createDirectMessage } from "../../actions/direct_message_actions";

function CreateDirectMessage(props) {
  const [body, setBody] = useState(props.message.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let directMessage = { content: body };
    props.createDirectMessage(props.conversation.id, directMessage);
    setBody("");
  };

  return (
    <div className="message-form-container">
      <form className="message-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
          placeholder={`Message @${props.user.username}`}
        />
      </form>
    </div>
  );
}

const mSTP = (state) => {
  return {
    message: {
      body: "",
    },
  };
};

const mDTP = (dispatch) => {
  return {
    createDirectMessage: (id, message) =>
      dispatch(createDirectMessage(id, message)),
  };
};

export default connect(mSTP, mDTP)(CreateDirectMessage);
