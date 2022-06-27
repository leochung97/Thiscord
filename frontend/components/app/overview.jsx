import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home"
import Servers from "./servers/servers";
import Channels from "./channels/channel";

export default class Overview extends React.Component {
  render() {
    return (
      <div className="overview-wrapper">
        <div className="servers-wrapper">
          <Servers />
        </div>
        <div className="channels-wrapper">
          <Channels />
        </div>
        <Switch>
          <Route exact path="/channels/@me" component={Home} />
        </Switch>
      </div>
    )
  }
}