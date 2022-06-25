import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home"
import Servers from "./servers/servers";

export default class Overview extends React.Component {
  render() {
    return (
      <div className="overview-wrapper">
        <div className="servers-wrapper">
          <Servers />
        </div>
        <Switch>
          <Route path="/channels/@me" component={Home} />
        </Switch>
      </div>
    )
  }
}