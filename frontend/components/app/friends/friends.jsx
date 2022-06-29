import React from "react";
import { connect } from "react-redux";

class Friends extends React.Component {
  render() {
    return (
      <div className="friends-wrapper">
        <div className="friends-wrapper-header">
          <div className="f-w-h-Friends">Friends</div>
          <div className="f-w-h-Divider"></div>
          <div className="f-w-h-Online">Online</div>
          <div className="f-w-h-All">All</div>
          <div className="f-w-h-Pending">Pending</div>
          <div className="f-w-h-Blocked">Blocked</div>
          <div className="f-w-h-Add-Friend">Add Friend</div>
          <div className="f-w-h-images">
            <img />
            <div className="f-w-h-Divider"></div>
            <img />
            <img />
          </div>
        </div>

        <div className="friends-wrapper-body">
          <div className="f-w-b-searchbar">
            Searchbar goes in this container
          </div>
          <div className="f-w-b-online">
            Online stuff goes here
          </div>
          <div className="f-w-b-friendslist">
            List of friends go here
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
});

export default connect(mSTP)(Friends);