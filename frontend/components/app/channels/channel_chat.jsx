import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ChannelChat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="channel-chat-wrapper">
        please tell me this is working
      </div>
    )
  }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default withRouter(connect(mSTP, mDTP)(ChannelChat));