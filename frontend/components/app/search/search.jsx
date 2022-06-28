import React from "react";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar-container">
        <h1>Find or start a conversation</h1>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id
});

export default connect(mSTP)(SearchBar);