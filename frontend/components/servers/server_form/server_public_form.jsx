import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/modal_actions";

class ServerPublicForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(bool) {
    bool ? this.props.make_public() : this.props.make_private();
    this.props.openModal("createServer");
  }

  render() {
    return (
      <div className="public-server-form-shell modal-light-theme">
        <svg
          className="close-button"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => this.props.closeModal()}
        >
          <path
            fill="currentColor"
            d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
          ></path>
        </svg>

        <div className="public-server-header server-modal-header">
          <h3>Tell us more about your server</h3>
          <div>
            In order to help you with your setup, is your new server for just a
            few friends or a larger community?
          </div>
        </div>
        <div className="public-server-content">
          <div
            className="server-button-shell"
            onClick={() => this.handleClick(false)}
          >
            <div className="server-button-imagetext">
              <img
                src={window.private_server}
                alt="create-server-icon"
                className="server-form-icon"
              />
              <div>For me and my friends</div>
            </div>
            <img
              src={window.server_modal_arrow}
              alt="create-server-icon"
              className="server-form-icon"
            />
          </div>
          <div
            className="server-button-shell"
            onClick={() => this.handleClick(true)}
          >
            <div className="server-button-imagetext">
              <img
                src={window.public_server}
                alt="create-server-icon"
                className="server-form-icon"
              />
              <div> For a club or community</div>
            </div>
            <img
              src={window.server_modal_arrow}
              alt="create-server-icon"
              className="server-form-icon"
            />
          </div>
          <div>
            Not sure? You can{" "}
            <span
              className="server-modal-link-text"
              onClick={() => this.handleClick(false)}
            >
              skip this question
            </span>{" "}
            for now.
          </div>
        </div>
        <div className="public-server-footer">
          <div
            onClick={() => this.props.openModal("formServer")}
            className="server-modal-back-button"
          >
            Back
          </div>
        </div>
      </div>
    );
  }
}

const mDTP = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mDTP)(ServerPublicForm);
