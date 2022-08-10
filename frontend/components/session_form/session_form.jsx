import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      email_error: "",
      username_error: "",
      password_error: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.sessionFormHeader = this.sessionFormHeader.bind(this);
    this.sessionFormLink = this.sessionFormLink.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const values = {
      password: this.state.password,
      email: this.state.email,
      username: this.state.username,
    };

    const user = Object.assign({}, values);

    this.props
      .processForm(user)
      .fail(() => this.renderErrors())
      .then(() => this.props.history.push("/channels"));
  }

  renderErrors() {
    this.state.email_error = "";
    this.state.username_error = "";
    this.state.password_error = "";

    this.props.errors.map((error) => {
      switch (true) {
        case /Email/.test(error):
          this.setState({ email_error: error });
          break;
        case /Username/.test(error):
          this.setState({ username_error: error });
          break;
        case /Password/.test(error):
          this.setState({ password_error: error });
          break;
        default:
          this.setState({ email_error: error });
          this.setState({ password_error: error });
          break;
      }
    });
  }

  username() {
    if (this.props.formType === "signup") {
      let usernamefieldClass =
        this.state.username_error.length > 1
          ? "input-container input-error"
          : "input-container";

      return (
        <div className={usernamefieldClass}>
          <label>
            USERNAME
            <span className="error-message">{this.state.username_error}</span>
          </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
        </div>
      );
    }
  }

  createDemoUser() {
    if (this.props.formType === "login") {
      return (
        <button
          type="submit"
          className="session-button"
          id="demo-user-button"
          onClick={() => this.demoLogin()}
        >
          Demo Login
        </button>
      );
    } else {
      return null;
    }
  }

  demoLogin() {
    const email = {
      strings: ["demouser@thiscord.com"],
      typeSpeed: 25,
    };

    const password = {
      strings: ["demopass"],
      typeSpeed: 25,
    };

    new Typed(".email", email);
    new Typed(".password", password);

    const values = {
      email: "demouser@thiscord.com",
      password: "demopass",
    };

    const user = Object.assign({}, values);

    setTimeout(() => {
      this.props
        .processForm(user)
        .then(() => this.props.history.push("/channels/@me"));
    }, 1000);
  }

  sessionFormHeader() {
    if (this.props.formType === "signup") {
      return (
        <div className="session-form-header">
          <h3>Create an account</h3>
        </div>
      );
    } else {
      return (
        <div className="session-form-header">
          <h3>Welcome back!</h3>
          <div>We're so excited to see you again!</div>
        </div>
      );
    }
  }

  sessionFormLink() {
    if (this.props.formType === "signup") {
      return (
        <div className="session-link-container">
          <Link to="/login">Already have an account?</Link>

          <p className="session-form-notice">
            By registering, you agree to Thiscord's <a>Terms of Service</a> and{" "}
            <a>Privacy Policy</a>
          </p>
        </div>
      );
    } else {
      return (
        <div className="session-link-container">
          <span>
            Need an account? <Link to="/signup">Register</Link>
          </span>
        </div>
      );
    }
  }

  render() {
    let text = this.props.formType === "signup" ? "Continue" : "Login";
    let emailfieldClass =
      this.state.email_error.length > 1
        ? "input-container input-error"
        : "input-container";

    let passfieldClass =
      this.state.password_error.length > 1
        ? "input-container input-error"
        : "input-container";

    return (
      <div className="session-form-container">
        <div className="input-form-container">
          {this.sessionFormHeader()}

          <form onSubmit={this.handleSubmit} className="session-form">
            <div className={emailfieldClass}>
              <label>
                EMAIL
                <span className="error-message">{this.state.email_error}</span>
              </label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="session-input email"
              />
            </div>

            {this.username()}

            <div className={passfieldClass}>
              <label>
                PASSWORD
                <span className="error-message">
                  {this.state.password_error}
                </span>
              </label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="session-input password"
              />
            </div>

            <button type="submit" className="session-button">
              {text}
            </button>

            {this.createDemoUser()}

            {this.sessionFormLink()}
          </form>
        </div>
        <div className="session-form-underlay"></div>
      </div>
    );
  }
}

export default SessionForm;
