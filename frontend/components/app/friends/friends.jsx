import React from "react";
import { connect } from "react-redux";

class Friends extends React.Component {
  render() {
    return (
      <div className="friends-wrapper">
        <div className="friends-wrapper-header">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"></path>
          </svg>
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