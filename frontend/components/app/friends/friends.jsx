import React from "react";
import { connect } from "react-redux";

class Friends extends React.Component {
  render() {
    return (
      <div className="friends-container">
        <h1>THIS IS WHERE YOUR FRIENDS WILL GO</h1>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
});

export default connect(mSTP)(Friends);