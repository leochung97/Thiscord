import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home"

export default class Overview extends React.Component {
  render() {
    return (
      <div className="overview-wrapper">
        <Switch>
          <Route path="/channels/@me" component={Home} />
        </Switch>
      </div>
    )
  }
}