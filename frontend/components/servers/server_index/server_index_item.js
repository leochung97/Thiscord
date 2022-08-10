import React from "react";
import { serverInitial } from "../../../util/server_api_util";

const ServerIndexItem = (props) => {
  return (
    <div
      className="server-button-shell"
      onClick={() => props.handleClick(props.server.id)}
      key={props.server.id}
    >
      <div className="server-button-imagetext">
        <div className="server-initial-modal">
          {serverInitial(props.server)}
        </div>
        <div>{props.server.name}</div>
      </div>
    </div>
  );
};

export default ServerIndexItem;
