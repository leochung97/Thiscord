import React from "react";
import { connect } from "react-redux";
import { createServer, fetchServers } from "../../../actions/server_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";
import { createServerMembership } from "../../../actions/server_membership_actions";

class ServerCreateForm extends React.Component {
  constructor(props) {
    super(props);

    const defaultServer = `${props.currentUser.username}'s server`;
    this.state = {
      name: defaultServer,
      is_public: props.is_public,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer(this.state).then(() => this.props.closeModal());
  }

  update() {
    return (e) => this.setState({ name: e.currentTarget.value });
  }

  render() {
    let error =
      this.props.errors.length > 0 ? "Must be between 3 and 100 in length" : "";

    return (
      <form
        className="create-server-shell modal-light-theme"
        onSubmit={this.handleSubmit}
      >
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

        <div className="create-server-header">
          <h3>Customize your server</h3>
          <div>
            Give your new server a personality with a name and icon. You can
            always change it later.
          </div>
        </div>

        <div className="create-server-content">
          <div>{error}</div>
          <div className="create-server-input">
            <label>SERVER NAME</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update()}
            />
          </div>
          <div className="server-disclaimer">
            By creating a server, you agree to Discord's{" "}
            <span>
              <a
                className="server-modal-link-text"
                href="https://discord.com/guidelines"
              >
                Community Guidelines
              </a>
            </span>
          </div>
        </div>
        <div className="create-server-footer">
          <div
            type="button"
            onClick={() => this.props.openModal("serverPublicForm")}
            className="server-modal-back-button"
          >
            Back
          </div>
          <button type="submit">Create</button>
        </div>
      </form>
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
    fetchServers: () => dispatch(fetchServers()),
    createServer: (server) => dispatch(createServer(server)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    createServerMembership: (membership) =>
      dispatch(createServerMembership(membership)),
  };
};

export default connect(mSTP, mDTP)(ServerCreateForm);
