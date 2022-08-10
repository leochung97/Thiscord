import React from "react";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/modal_actions";

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-server-shell  modal-light-theme">
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

        <div className="form-server-header server-modal-header">
          <h3>Create a server</h3>
          <div>
            Your server is where you and your friends hang out. Make yours and
            start talking.
          </div>
        </div>

        <div className="form-server-content">
          <div
            className="server-button-shell"
            onClick={() => this.props.openModal("formMakeServerPublic")}
          >
            <div className="server-button-imagetext">
              <img
                src={window.server_create}
                alt="create-server-icon"
                className="server-form-icon"
              />
              <div>Create My Own</div>
            </div>
            <img
              src={window.server_modal_arrow}
              alt="create-server-icon"
              className="server-form-icon"
            />
          </div>
        </div>
        <div className="form-server-footer">
          <div
            onClick={() => this.props.openModal("indexServer")}
            className="server-form-search"
          >
            Join a Server
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

export default connect(null, mDTP)(ServerForm);
