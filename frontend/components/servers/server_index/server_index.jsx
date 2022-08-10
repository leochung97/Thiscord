import React from "react";
import ServerIndexContent from "./server_index_content";
import { connect } from "react-redux";
import { fetchServers } from "../../../actions/server_actions";
import { closeModal } from "../../../actions/modal_actions";
import { createServerMembership } from "../../../actions/server_membership_actions";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers();
  }

  handleClick(id) {
    this.props.createServerMembership({
      user_id: this.props.currentUser.id,
      server_id: id,
    });
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal-light-theme">
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

        <div className="server-index-modal-shell">
          <div className="server-modal-header">
            <h3>Join a Server</h3>
          </div>
          <ServerIndexContent
            handleClick={this.handleClick}
            servers={this.props.servers}
          />
        </div>
      </div>
    );
  }
}

const publicServers = (state) => {
  if (Object.keys(state.entities.servers).length === 0) return [];
  let public_servers = [];
  const currentUser = state.entities.users[state.session.id];

  Object.keys(state.entities.servers).map((id) => {
    public_servers.push(parseInt(id));
  });

  currentUser.servers.map((id) => {
    return public_servers.splice(public_servers.indexOf(id), 1);
  });

  public_servers = public_servers.filter(
    (serverId) => state.entities.servers[serverId].is_public
  );
  public_servers = public_servers.filter(
    (serverId) => (state.entities.servers[serverId].owner_id = currentUser.id)
  );
  public_servers = public_servers.map(
    (serverId) => state.entities.servers[serverId]
  );
  return public_servers;
};

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    servers: publicServers(state),
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchServers: () => dispatch(fetchServers()),
    createServerMembership: (id) => dispatch(createServerMembership(id)),
  };
};

export default connect(mSTP, mDTP)(ServerIndex);
