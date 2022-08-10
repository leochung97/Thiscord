import React from "react";
import ServerIndexItem from "./server_index_item";

const ServerIndexContent = (props) => {
  return (
    <ul className="server-index-modal-content">
      {props.servers.map((server) => {
        return (
          <ServerIndexItem
            server={server}
            handleClick={props.handleClick}
            key={server.id}
          />
        );
      })}
    </ul>
  );
};

export default ServerIndexContent;
