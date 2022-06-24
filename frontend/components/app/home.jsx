import React from "react"
import { connect } from "react-redux";
import Servers from "./servers/servers";
import Friends from "./friends/friends";
import SearchBar from "./search/search";
import Messages from "./messages/messages";

class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="servers-wrapper">
          <Servers />
        </div>
        <div className="sidebar-wrapper">
          <SearchBar />
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