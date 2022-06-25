import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/session_actions";
import { fetchServers } from "../../../actions/server_actions";

class Servers extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchServers(this.props.currentUserId);
  }

  componentDidUpdate() {
    
  }

  handleClick(e) {
    
  }
  
  render() {
    const { servers } = this.props;

    return (
      <div className="servers-container">
        <Link to="/channels/@me" className="servers-home-button">Home</Link>

        <ul>
          {
            servers.map(server => 
              <li key={server.id}>{server.server_name}</li>
            )
          }
        </ul>

        <button onClick={this.handleClick}>Add a Server</button>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUserId: state.session.id,
  servers: state.entities.servers,
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchServers: userId => dispatch(fetchServers(userId)),
})

export default connect(mSTP, mDTP)(Servers);