import React from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { login } from '../../actions/session_actions.js';

function Splash(props) {
  return (
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
          <Link to={props.loggedIn ? "/channels/@me" : "/login"} className="splash-header-login-button">
            {props.loggedIn ? "Open Thiscord" : "Login"}
          </Link>
        </nav>

        <div className="splash-header-content">
          <img src="https://thiscord-assets.s3.amazonaws.com/splash_header_left.svg" className="splash-header-background-left" alt="Mountains" />
          <img src="https://thiscord-assets.s3.amazonaws.com/splash_header_right.svg" className="splash-header-background-right" alt="" />
          <img src="https://thiscord-assets.s3.amazonaws.com/discord-header-background-image.svg" className="splash-header-background" alt="" />
          <h1>IMAGINE A PLACE...</h1>
          <h3>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h3>
          <div className="splash-header-buttons">
            <Link to={props.loggedIn ? "/channels/@me" : "/login"} className="splash-header-download-button">
              <svg width="24" height="24" viewBox="0 0 24 24" className="download-svg">
                <g fill="currentColor">
                  <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                  <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                </g>
              </svg>
              Download for Mac
            </Link>
            <Link to={props.loggedIn ? "/channels/@me" : "/login"} className="splash-header-open-button">
              Open Thiscord in your browser
            </Link>
          </div>
        </div>
      </header>

      <section>
        <div className="splash-content-grid-1">
          <img src="https://thiscord-assets.s3.amazonaws.com/splash_channels.svg" className="splash-content-image-1" alt="Text Channels Example" />
          <div className="splash-content-1">
            <h1>Create an invite-only place where you belong</h1>
            <h3>Thiscord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</h3>
          </div>
        </div>
        <div className="splash-content-grid-2">
          <img src="https://thiscord-assets.s3.amazonaws.com/splash_voice.svg" className="splash-content-image-2" alt="Voice Channels Example" />
          <div className="splash-content-2">
            <h1>Where hanging out is easy</h1>
            <h3>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</h3>
          </div>
        </div>
        <div className="splash-content-grid-3">
          <img src="https://thiscord-assets.s3.amazonaws.com/splash_friends.svg" className="splash-content-image-3" alt="Server Roles Example" />
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
          <img src="https://thiscord-assets.s3.amazonaws.com/splash_video.svg" className="splash-content-image-4" alt="Stream Example" />
        </div>
        <div className="splash-content-grid-5">
          <div className="splash-content-ready-container">
            <img src="https://thiscord-assets.s3.amazonaws.com/splash_sparkles.svg" className="splash-content-ready-sparkles" alt="" />
            <h1>Ready to start your journey?</h1>
            <Link to="/channels/@me" className="splash-ready-button">
              {props.loggedIn ? 
                <div>Open Thiscord</div> 
                :
                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" className="download-svg">
                    <g fill="currentColor">
                      <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                      <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                    </g>
                  </svg>
                  Download for Mac
                </div>
              }
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="splash-footer-container">
          <div className="splash-footer-grid">
            <div className="splash-footer-motto">
              CREATOR LINKS
            </div>
          </div>
          <div className="splash-footer-links">
            <div className="LinkedIn">
              <a href="https://www.linkedin.com/in/swchung/"><img src="https://thiscord-assets.s3.amazonaws.com/icons8-linkedin-100.png" alt="LinkedIn Profile" /></a>
            </div>
            <div className="GitHub">
              <a href="https://github.com/leochung97"><img src="https://thiscord-assets.s3.amazonaws.com/icons8-github-100.png" alt="GitHub Profile" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const mSTP = state => ({
  loggedIn: Boolean(state.session.id),
});

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default withRouter(connect(mSTP, mDTP)(Splash));