import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session_actions";

export default class Splash extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="splash-page">
        <h1>Splash!</h1>
      </div>
    )
  }
}