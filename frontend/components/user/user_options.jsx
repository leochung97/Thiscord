import React, { useState } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";

function UserOptions(props) {
  const [username, setUsername] = useState(props.currentUser.username);
  const [usernameEdit, setUsernameEdit] = useState(false);
  const [email, setEmail] = useState(props.currentUser.email);
  const [emailEdit, setEmailEdit] = useState(false);

  const handleClick = () => {
    props.logout();
    props.closeModal();
  };

  const userProfile = () => {
    let user_url =
      props.currentUser.user_url === ""
        ? window.default
        : props.currentUser.user_url;

    return (
      <div className="user-settings-nameemail">
        <div className="settings-profile">
          <img src={user_url} alt="user profile picture" />
        </div>
        <div className="user-settings-handle">
          <span>{props.currentUser.username}</span>
          <span>#{props.currentUser.user_tag}</span>
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    if (props.currentUser.email == "demouser@thiscord.com") {
      return null;
    }
    e.preventDefault();
    e.stopPropagation();

    let user = props.currentUser;
    user.username = username;
    user.email = email;
    props.updateUser(user);

    setUsernameEdit(false);
    setEmailEdit(false);
  };

  const usernameEditDisplay = () => {
    let usernameBody;
    if (props.currentUser.username == "Demo User") {
      usernameBody = (
        <div className="edit-user-shell edit-username">
          <div className="edit-user-info">
            <h3>USERNAME</h3>
            <span>{props.currentUser.username}</span>
            <span id="user-options-tag">#{props.currentUser.user_tag}</span>
          </div>
        </div>
      );
    } else if (usernameEdit) {
      usernameBody = (
        <div className="edit-user-shell edit-username">
          <form onSubmit={(e) => handleSubmit(e)} className="edit-user-form">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
          </form>
        </div>
      );
    } else {
      usernameBody = (
        <div className="edit-user-shell edit-username">
          <div className="edit-user-info">
            <h3>USERNAME</h3>
            <span>{props.currentUser.username}</span>
            <span id="user-options-tag">#{props.currentUser.user_tag}</span>
          </div>
          <div
            className="edit-user-button"
            onClick={() => setUsernameEdit(!usernameEdit)}
          >
            Edit
          </div>
        </div>
      );
    }

    return usernameBody;
  };

  const demoUser = () => {
    if (props.currentUser.username == "Demo User") {
      return (
        <div className="demo-edit-warning">Demo Account cannot be edited!</div>
      );
    }
  };

  const emailEditDisplay = () => {
    let emailBody;
    if (props.currentUser.username == "Demo User") {
      emailBody = (
        <div className="edit-user-shell">
          <div className="edit-user-info">
            <h3>EMAIL</h3>
            <span>{props.currentUser.email}</span>
          </div>
        </div>
      );
    } else if (emailEdit) {
      emailBody = (
        <div className="edit-user-shell">
          <form onSubmit={(e) => handleSubmit(e)} className="edit-user-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </form>
        </div>
      );
    } else {
      emailBody = (
        <div className="edit-user-shell">
          <div className="edit-user-info">
            <h3>EMAIL</h3>
            <span>{props.currentUser.email}</span>
          </div>
          <div
            className="edit-user-button"
            onClick={() => setEmailEdit(!emailEdit)}
          >
            Edit
          </div>
        </div>
      );
    }

    return emailBody;
  };

  const editDisplay = () => {
    return (
      <div className="user-options-edit-shell">
        {usernameEditDisplay()}
        {emailEditDisplay()}
      </div>
    );
  };

  return (
    <div className="user-options">
      <div className="close-button-circle">
        <div
          className="close-button-svg-shell"
          onClick={() => props.closeModal()}
        >
          <svg
            className="close-button-circle-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
            ></path>
          </svg>
        </div>
        <div id="esc">ESC</div>
      </div>

      <div className="user-settings-shell">
        <h3>USER SETTINGS</h3>
        <div id="my-account">My Account</div>
        <div className="logout-button" onClick={() => handleClick()}>
          <div>Log Out</div>
          <svg aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18 2H7C5.897 2 5 2.898 5 4V11H12.59L10.293 8.708L11.706 7.292L16.414 11.991L11.708 16.706L10.292 15.294L12.582 13H5V20C5 21.103 5.897 22 7 22H18C19.103 22 20 21.103 20 20V4C20 2.898 19.103 2 18 2Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="account-settings-shell">
        <h3>My Account</h3>
        <div className="account-settings-box">
          <div className="banner-user"></div>
          <div>
            {userProfile()}
            {editDisplay()}
            {demoUser()}
          </div>
        </div>
      </div>
    </div>
  );
}

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    updateUser: (user) => dispatch(updateUser(user)),
  };
};

export default connect(mSTP, mDTP)(UserOptions);
