import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login } from '../../actions/session_actions';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  render() {
    return (
      <div className="splash-page-wrapper">
        <header>
          <nav className="splash-header-inner">
            <div className="splash-header-logo">
              <h1>LOGO</h1>
            </div>
            <ul className="splash-header-nav">
              <li id="splash-wiki-page-link">Wiki Page<img src="#" className="splash-drop-down-arrow" />
                <ul id="splash-wiki-drop-down" className="splash-wiki-drop-down-hidden">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">MVP List</a></li>
                  <li><a href="#">Database Schema</a></li>
                  <li><a href="#">Sample State</a></li>
                  <li><a href="#">Frontend Routes</a></li>
                  <li><a href="#">Backend Routes</a></li>
                </ul>
              </li>
            </ul>
            <ul className="splash-header-nav-right">
              <li><a href="#"><i className="fab fa-github"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-angellist"></i></a></li>
              <li><Link to="/login" className="splash-app-button">
                {this.props.loggedIn ? "Open" : "Login"}
              </Link></li>
            </ul>
            <div className="splash-app-academy">
              <span className="splash-line"></span>
              <a href="https://www.appacademy.io/"><div className="splash-aa-logo"></div></a>
            </div>
          </nav>
        </header>
        <section>
          <div className="splash-content">
            <h1 className="splash-theme-header">It's time to ditch Skype and TeamSpeak.</h1>
            <p className="splash-blurb">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop
              and phone.
              Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
            <div className="splash-buttons-wrapper">
              <button type="button" className="splash-download" onClick={this.demoLogin}>Login as a Demo User</button>
              <Link to="/login" className="splash-open-discord">
                {this.props.loggedIn ? "Open Discode" : "Open Discode in your browser"}
              </Link>
            </div>
          </div>
          <div className="splash-image">
            <div className="splash-shadow"></div>
          </div>
        </section>
        <footer>
          <div className="splash-separator"></div>
          <div className="join-discord">
            <div className="splash-stats">
              <h2>Ready to try Discode? It's free!</h2>
              <h3>Join over 150 million players today</h3>
            </div>
            {this.props.loggedIn ?
              <Link to="/channels/@me">Open Discode</Link>
              : <Link to="/register">Sign Up Now</Link>}
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
});

const mapDispatchToProps = dispatch => ({
  login: userInfo => dispatch(login(userInfo)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Splash));