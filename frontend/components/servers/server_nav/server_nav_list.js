import React from "react";
import ServerNavItems from "./server_nav_items";

const ServerNavList = (props) => {
  if (!props.servers) {
    return null;
  }

  return (
    <ul className="server-nav-server-list">
      {props.servers.map((server, idx) => {
        return (
          <ServerNavItems
            server={server}
            history={props.history}
            fetchServer={props.fetchServer}
            key={idx.toString()}
          />
        );
      })}
    </ul>
  );
};

export default ServerNavList;
