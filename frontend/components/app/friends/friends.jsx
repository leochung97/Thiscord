import React from "react";
import { connect } from "react-redux";

class Friends extends React.Component {
  render() {
    return (
      <div className="friends-component-container">
        
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
});

export default connect(mSTP)(Friends);