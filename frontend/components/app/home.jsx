import React from "react"
import Friends from "./friends/friends";
import SearchBar from "./search/search";
import Messages from "./messages/messages";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="sidebar-wrapper">
        <SearchBar />
      </div>
      <div className="friends-container">
        <img src="https://thiscord-assets.s3.amazonaws.com/icons8-complaint-30.png" />
        <p>Friends</p>
      </div>
      <div className="messages-wrapper">
        <Messages />
      </div>
    </div>
  )
}

export default (Home);