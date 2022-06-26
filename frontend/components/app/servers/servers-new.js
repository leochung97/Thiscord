import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../actions/session_actions";
import { fetchServers, createServer, deleteServer } from "../../../actions/server_actions";

export default function Servers() {
  const [isOpen, setIsOpen] = useState(false);

  const servers = useSelector(
    state => state.entities.servers,
    (oldState, newState) => oldState.length === newState.length
  );
  
  const userId = useSelector(state => state.session.id);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());
  const handleClick = () => setIsOpen(true);

  const addServer = () => {
    dispatch(createServer({
      server_name: "new server",
      path: "/newserver"
    }));
  };

  useEffect(() => {
    dispatch(fetchServers(userId));
  }, [userId]);

  return <div className="servers-container">
    <Link to="/channels/@me" className="servers-home-button">Home</Link>
    <ul>
      {
        servers.map(server =>
          <div>
            <li onClick={setIsOpen} key={server.id}>
              {server.server_name}
            </li>
            
          </div>  
        )
      }
    </ul>

    <div className="servers-create-container">
      <button className="servers-create-button" onClick={addServer}>Add a Server</button>
    </div>

    <div className="servers-logout-container">
      <button className="servers-logout-button" onClick={handleLogout}>Logout</button>
    </div>
  </div>
}
