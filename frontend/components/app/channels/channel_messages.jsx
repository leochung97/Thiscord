import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ChannelMessages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="channel-messages-wrapper">
        <div className="channel-messages-header">
          Header goes here
        </div>
        <div className="channel-messages-body">
          <div className="channel-messages-container">
            List of messages will go here
            <div className="channel-messages-form-container">
              <form className="channel-messages-form">
                Input Bar
                <img />
                {/* <input className="channel-messages-input">Message #all-topics</input> */}
                <img />
                <img />
                <img />
                <img />
              </form>
            </div>
          </div>
          <div className="channel-users-container">
            List of users will go here
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default withRouter(connect(mSTP, mDTP)(ChannelMessages));