import React from "react";
import ServerIndexItem from "./server_index_item";

const ServerIndexContent = (props) => {
  if (props.servers.length > 0) {
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
  } else {
    return (
      <div className="no-server-text">No available public servers to join!</div>
    );
  }
};

export default ServerIndexContent;
