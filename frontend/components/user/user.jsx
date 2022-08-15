import React from "react";
import ReactTooltip from "react-tooltip";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user_url = this.props.currentUser.user_url;

    return (
      <div className="user-options-shell">
        <div className="user-info-shell">
          <img src={user_url} alt="profile picture" />
          <div className="user-handle">
            <div className="user-username">
              {this.props.currentUser.username}
            </div>
            <div className="user-tag">#{this.props.currentUser.user_tag}</div>
          </div>
        </div>
        <div className="user-icon-shell">
          <div data-tip data-for="user-options" className="user-options-icon">
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div data-tip data-for="user-options" className="user-options-icon">
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <ReactTooltip
            id="user-options"
            place="top"
            type="dark"
            effect="solid"
            backgroundColor="#202225"
          >
            <span>No voice functionality added!</span>
          </ReactTooltip>
          <div
            data-tip
            data-for="user-settings"
            className="user-options-icon"
            onClick={() => this.props.openModal("userOptions")}
          >
            <svg aria-hidden="false" width="20" height="20" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              ></path>
            </svg>
          </div>
          <ReactTooltip
            id="user-options"
            place="top"
            type="dark"
            effect="solid"
            backgroundColor="#202225"
          >
            <span>User Settings</span>
          </ReactTooltip>
        </div>
      </div>
    );
  }
}

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.server,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(User);
