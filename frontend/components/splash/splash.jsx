import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions/session";

export default class Splash extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="splash-page">
        <h1>Is this working?</h1>
      </div>
    )
  }
}