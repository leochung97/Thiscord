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
        OMG!!!
      </div>
    )
  }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

});

export default withRouter(connect(mSTP, mDTP)(ChannelMessages));