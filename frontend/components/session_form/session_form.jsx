import React from "react";
import Typed from 'typed.js';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.signupForm = this.signupForm.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => {
      this.props.history.push("/channels/@me")
    });
  }

  demoLogin() {
    const email = {
      strings: ["demouser@demo.com"],
      typeSpeed: 50,
    };

    const password = {
      strings: ["demopass"],
      typeSpeed: 50,
    };

    this.setState({
      email: '',
      password: ''
    });

    new Typed(".email", email);
    new Typed(".password", password);

    setTimeout(() => { this.props.processForm({ email: "demo@demo.com", password: "demopass" })
      .then(() => { this.props.history.push("/channels/@me")})
    }, 1000); 
  }

  // SWITCH TO LOGIN / SIGNUP
  formSwitcher() {
    if (this.props.formType === "login") {
      return (
        <p className="session-need-account">
          <span>Need an account?</span>
          <button onClick={this.signupForm}>Register</button>
        </p>
      )
    } else if (this.props.formType === "signup") {
      return (
        <p className="session-already-account">
          <button onClick={this.loginForm}>Already have an account?</button>
        </p>
      )
    }
  }

  // SESSION FORM MESSAGE
  renderMessage() {
    if (this.props.formType === "login") {
      return (
        <div className="session-form-welcome">
          <h3>Welcome back!</h3>
          <div>We're so excited to see you again!</div>
        </div>
      )
    } else if (this.props.formType === "signup") {
      return (
        <div className="session-form-message">
          <h3>Create an account</h3>
        </div>
      )
    }
  }

  loginForm() {
    setTimeout(() => { this.props.history.push("/login") }, 50);
  }

  signupForm() {
    setTimeout(() => { this.props.history.push("/signup") }, 50);
  }

  // ERRORS HANDLING
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-page-wrapper">
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          {this.props.formType === "login" ?
            <div className="session-login-form">
              <div className="session-login-container">
                {this.renderMessage()}
                <div className="session-input-block">
                  <label>
                    EMAIL OR PHONE NUMBER
                  </label>
                  <input required type='email' onChange={this.update('email')} className="session-input email" />
                  <label>
                    PASSWORD
                  </label>
                  <input required type='password' onChange={this.update('password')} className="session-input password" />
                  <a href="#" className="session-input-forgot">Forgot your password?</a>
                  <div className="session-input-button-container">
                    <input type='submit' value="Login" className="session-login-button" />
                    <input onClick={this.demoLogin} value="Use Demo Credentials" className="session-demo-button" />
                  </div>
                  {this.formSwitcher()}
                </div>
              </div>
              <div className="session-empty-block"></div>
              <div className="session-qr-container">
                <img src="https://thiscord-assets.s3.amazonaws.com/discord-qr-image.png" className="session-qr-img" alt=""></img>
                <div className="session-qr-login">Log in with QR Code</div>
                <div className="session-qr-instruction">Scan this with the <strong>Thiscord mobile app</strong> to log in instantly.</div>
              </div>
            </div>

            :

            <div className="session-signup-form">
              <label>
                EMAIL
                <input required type='email' onChange={this.update('email')} className="session-input email" />
              </label>
              <br />
              <label>
                USERNAME
                <input required type='text' onChange={this.update('username')} className="session-input username" />
              </label>
              <br />
              <label>
                PASSWORD
                <input required type='password' onChange={this.update('password')} className="session-input password" />
              </label>
              <br />
              <input type='submit' value="Continue" className="session-sign-button" />
            </div>
          }
          
        </form>
      </div>
    )
  }
}
