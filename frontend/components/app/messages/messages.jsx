import React from "react";
import { connect } from "react-redux";

class Messages extends React.Component {
  render() {
    return (
      <div className="searchbar-container">
        <h1>THIS IS WHERE YOUR MESSAGES WILL GO</h1>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
});

export default connect(mSTP)(Messages);