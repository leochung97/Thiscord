import React from "react";
import { connect } from "react-redux";

class Messages extends React.Component {
  render() {
    return (
      <div className="messages-container">
        <h1>DIRECT MESSAGES</h1>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
});

export default connect(mSTP)(Messages);