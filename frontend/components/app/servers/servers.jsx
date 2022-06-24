import React from "react";
import { connect } from "react-redux";

class Servers extends React.Component {
  render() {
    return (
      <div className="servers-container">
        LIST OF SERVERS
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
});

export default connect(mSTP)(Servers);