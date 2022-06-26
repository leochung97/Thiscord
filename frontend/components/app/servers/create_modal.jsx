import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createServer } from "../../../actions/server_actions";

class CreateServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server_name: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    e.preventDefault();
    this.setState({ server_name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createServer({ server_name: this.state.server_name })
      .then(({ server }) => {
        console.log(server);
        this.props.closeModal();
        this.props.history.push(`${server.id}`);
      })
  }

  render() {
    return (
      <div className="create-server-modal">
        <div className="create-server-wrapper">
          <div className="create-server-header-container">
            <h1>Customize your server</h1>
            <h3>Give your new server a personality with a name. You can always change it later.</h3>
          </div>
          <h3>SERVER NAME</h3>
          <form onSubmit={this.handleSubmit}>
            <input className="create-server-input" type="text" onChange={this.update} value={this.state.server_name} placeholder={`Server Name`} />
            <div>By creating a server, you agree to Thiscord's <a href="">Community Guidelines.</a></div>
            <button type="submit">Create</button>
          </form>
          <button className="create-server-exit" onClick={this.props.closeModal}>
            Back
          </button>
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id,
  errors: state.errors.server,
});

const mDTP = dispatch => ({
  createServer: server => dispatch(createServer(server)),
});

export default withRouter(connect(mSTP, mDTP)(CreateServer));