import React from "react";
import { Link } from "react-router-dom";

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
              <li><a href="https://github.com/leochung97/Thiscord">Thiscode Github</a></li>
              <li><a href="https://github.com/leochung97/Thiscord/wiki/MVP-List">MVP List</a></li>
              <li><a href="https://github.com/leochung97/Thiscord/wiki/Database-Schema">Schema</a></li>
              <li><a href="https://github.com/leochung97/Thiscord/wiki/Sample-State">Sample State</a></li>
              <li><a href="https://github.com/leochung97/Thiscord/wiki/Frontend-Routes-and-Components">Frontend</a></li>
              <li><a href="https://github.com/leochung97/Thiscord/wiki/Sample-State">Backend</a></li>
              <li><Link to="/login" className="splash-login-button">
                { this.props.loggedIn ? "Open Discord" : "Login" }
              </Link></li>
              { this.props.loggedIn ? <li><button onClick={this.props.logout}>Logout</button></li> : "" }
            </ul>
          </nav>
        </header>

        <section>
          <div className="splash-content-1">
            <h1>Create an invite-only place where you belong</h1>
            <h3>Discord servers are orgnaized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</h3>
          </div>
          <div className="splash-content-2">
            <h1>Where hanging out is easy</h1>
            <h3>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</h3>
          </div>
          <div className="splash-content-3">
            <h1>From few to a fandom</h1>
            <h3>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</h3>
          </div>
          <div className="splash-content-4">
            <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
            <h3>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</h3>
          </div>
          <div className="splash-content-ready">
            <h1>Ready to start your journey?</h1>
            <Link to="/login" className="splash-login-button">
              {this.props.loggedIn ? "Open Discord" : "Download for Mac"}
            </Link>
          </div>
        </section>

        <footer>
          <div>FOOTER CONTAINER</div>
        </footer>
      </div>
    )
  }
}