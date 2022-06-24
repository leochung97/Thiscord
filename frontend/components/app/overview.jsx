import React from "react";
import { Switch } from "react-router-dom";


export default class Overview extends React.Component {
  render() {
    return(
      <div className="overview-wrapper">
        <Switch>
          <Route path="/channels/@me" component={Central}/>
        </Switch>
      </div>
    )
  }
}