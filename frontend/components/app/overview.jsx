import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home"
import Servers from "./servers/servers";
import Channels from "./channels/channel";

export default class Overview extends React.Component {
  render() {
    return (
      <div className="overview-wrapper">
        <div className="server-wrapper">
          <Servers />
        </div>
        <Switch>
          <Route exact path="/channels/@me" component={Home} />
          <Route path="/channels/:serverId" component={Channels} />
        </Switch>
      </div>
    )
  }
}