import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../util/session_api_util";

export default class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="splash-page-wrapper">
        WRAPPER CONTAINER
        <header>
          HEADER CONTAINER
          <nav className="splash-header-wrapper">
            <div className="splash-header-logo">
            </div>
            <ul className="splash-header-nav">
              <li><a href="">Thiscode Github</a></li>
            </ul>
          </nav>
        </header>
        <footer>
          <div>FOOTER CONTAINER</div>
        </footer>
      </div>
    )
  }
}