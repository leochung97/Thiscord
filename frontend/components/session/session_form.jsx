import React from "react";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.signupForm = this.signupForm.bind(this);
  }
  
  handleInput(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    } 
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state).then(() => this.props.history.push('/'))
  }

  formSwitcher(){
    if (this.props.formType === "login") {
      return (
        <p>
          Need an account? <button onClick={this.signupForm}>Register</button>
        </p>
      )
    } else if (this.props.formType === "signup") {
      return (
        <p>
          <button onClick={this.loginForm}>Already have an account?</button>
        </p>
      )
    }
  }

  // SESSION FORM MESSAGE
  renderMessage() {
    if (this.props.formType === "login") {
      return (
        <div className="session-form-message">
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
    setTimeout(() => { this.props.history.push("/login")}, 50);
  }

  signupForm() {
    setTimeout(() => { this.props.history.push("/signup") }, 50);
  }
  
  // ERRORS HANDLING
  renderErrors() {
    return (
      <ul className="session-errors'">
        { 
          this.props.errors.map((error, i) => (
            <li key={i}>
              { error }
            </li>
          ))
        }
      </ul>
    )
  }

  render(){
    return(
      <div className="session-page-wrapper">
        <form onSubmit={this.handleSubmit}>
          {this.renderMessage()}
          {this.renderErrors()}
          {this.props.formType === "login" ? 
            <div className="session-login-form">
              TESTING LOGIN
            </div>
            : 
            <div className="session-signup-form">
              TESTING SIGNUP
            </div>
          }
        </form>
      </div>
    )
  }
}