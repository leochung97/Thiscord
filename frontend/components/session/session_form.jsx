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

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.formType);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field){
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
              <label>
                EMAIL OR PHONE NUMBER
                <input required type='email' onChange={this.update('email')} className="session-input-email" />
              </label>

              <label>
                PASSWORD
                <input required type='password' onChange={this.update('password')} className="session-input-password" />
              </label>

              <a href="#" className="session-input-forgot">Forgot your password?</a>

              <input type='submit' value={this.props.formtype === 'login' ? 'Login' : 'Continue'} className="session-login-button" />
            </div>
            : 
            <div className="session-signup-form">
              <label>
                EMAIL
                <input required type='email' onChange={this.update('email')} className="session-input-email" />
              </label>

              <label>
                USERNAME
                <input required type='text' onChange={this.update('username')} className="session-input-username" />
              </label>

              <label>
                PASSWORD
                <input required type='password' onChange={this.update('password')} className="session-input-password" />
              </label>

              <label>
                DATE OF BIRTH - TBU
                <input required type='date'/>
              </label>

              <input type='submit' value={this.props.formtype === 'login' ? 'Login' : 'Continue'} className="session-sign-button"/>
            </div>
          }
          {this.formSwitcher()}
        </form>
      </div>
    )
  }
}