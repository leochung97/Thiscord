import React from "react";
import { Link } from "react-router-dom";

export default class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="splash-page-wrapper">
        <header>
          <nav className="splash-header-nav">
            <Link to="/" className="splash-header-logo">Thiscord</Link>
            <div className="splash-header-nav-links">
              <a href="https://github.com/leochung97/Thiscord">Project Github</a>
              <a href="https://github.com/leochung97/Thiscord/wiki/MVP-List">MVP List</a>
              <a href="https://github.com/leochung97/Thiscord/wiki/Database-Schema">Schema</a>
              <a href="https://github.com/leochung97/Thiscord/wiki/Sample-State">Sample State</a>
              <a href="https://github.com/leochung97/Thiscord/wiki/Frontend-Routes-and-Components">Frontend</a>
              <a href="https://github.com/leochung97/Thiscord/wiki/Sample-State">Backend</a>
            </div>
            <Link to="/login" className="splash-header-login-button">
              {this.props.loggedIn ? "Open Thiscord" : "Login"}
            </Link>
            {this.props.loggedIn ? <button onClick={this.props.logout}>Logout</button> : ""}
          </nav>

          <div className="splash-header-content">
            <img src="https://thiscord-assets.s3.amazonaws.com/splash_header_left.svg" className="splash-header-background-left" alt="" />
            <img src="https://thiscord-assets.s3.amazonaws.com/splash_header_right.svg" className="splash-header-background-right" alt="" />
            <img src="https://thiscord-assets.s3.amazonaws.com/discord-header-background-image.svg" className="splash-header-background" alt="" />
            <h1>IMAGINE A PLACE...</h1>
            <h3>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h3>
            <div className="splash-header-buttons">
              <Link to="/login" className="splash-header-download-button">
                Download for Mac
              </Link>
              <Link to="/login" className="splash-header-open-button">
                Open Thiscord in your browser
              </Link>
            </div>
          </div>
        </header>

        <section>
          <div className="splash-content-grid-1">
            <img src="https://thiscord-assets.s3.amazonaws.com/splash_channels.svg" className="splash-content-image-1" alt="" />
            <div className="splash-content-1">
              <h1>Create an invite-only place where you belong</h1>
              <h3>Thiscord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</h3>
            </div>
          </div>
          <div className="splash-content-grid-2">
            <img src="" className="splash-content-image-2" alt="" />
            <div className="splash-content-2">
              <h1>Where hanging out is easy</h1>
              <h3>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</h3>
            </div>
          </div>
          <div className="splash-content-grid-3">
            <img src="" className="splash-content-image-3" alt="" />
            <div className="splash-content-3">
              <h1>From few to a fandom</h1>
              <h3>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</h3>
            </div>
          </div>
          <div className="splash-content-grid-4">
            <div className="splash-content-4">
              <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
              <h3>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</h3>
            </div>
          </div>
          <div className="splash-content-grid-5">
            <div className="splash-content-ready">
              <h1>Ready to start your journey?</h1>
              <Link to="/login" className="splash-ready-button">
                {this.props.loggedIn ? "Open Thiscord" : "Download for Mac"}
              </Link>
            </div>
          </div>
        </section>

        <footer>
          <div className="splash-footer-column-1">
            IMAGINE A PLACE
            <a href="">Twitter</a>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Youtube</a>
          </div>

          <div className="splash-footer-column-2">
            SEPARATOR
          </div>

          <div className="splash-footer-column-3">
            Product
            <a href="">Download</a>
            <a href="">Nitro</a>
            <a href="">Status</a>
          </div>

          <div className="splash-footer-column-4">
            Company
            <a href="">About</a>
            <a href="">Jobs</a>
            <a href="">Branding</a>
            <a href="">Newsroom</a>
          </div>

          <div className="splash-footer-column-5">
            Resources
            <a href="">College</a>
            <a href="">Support</a>
            <a href="">Safety</a>
            <a href="">Blog</a>
            <a href="">Feedback</a>
            <a href="">Developers</a>
            <a href="">StreamKit</a>
          </div>

          <div className="splash-footer-column-6">
            Policies
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Cookie Settings</a>
            <a href="">Guidelines</a>
            <a href="">Acknowledgements</a>
            <a href="">Licenses</a>
            <a href="">Moderation</a>
          </div>

          <nav className="splash-footer-wrapper">
            <div className="splash-footer-logo">
              Thiscord
            </div>
            <div className="splash-footer-login-button">
              <Link to="/login" className="splash-login-button">
                {this.props.loggedIn ? "Open Thiscord" : "Login"}
              </Link>
            </div>
          </nav>
        </footer>
      </div>
    )
  }
}