import React from "react"
import { connect } from "react-redux";
import Friends from "./friends/friends";
import SearchBar from "./search/search";
import Messages from "./messages/messages";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="sidebar-wrapper">
          <SearchBar />
        </div>
        <div className="friends-container">
          <div></div>
          <img></img><p>Friends</p>
        </div>
        <div className="messages-wrapper">
          <Messages />
        </div>
        <div className="friends-wrapper">
          <Friends />
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
});

export default connect(mSTP)(Home);