import React from "react";

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
          Need an account? <button onClick={this.registerForm}>Register</button>
        </p>
      )
    } else if (this.props.formType === "register") {
      return (
        <p>
          <button onClick={this.loginForm}>Already have an account?</button>
        </p>
      )
    }
  }

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
  
  registerForm() {
    setTimeout(() => { this.props.history.push("/login")}, 50);
  }

  loginForm() {
    setTimeout(() => { this.props.history.push("/signup") }, 50);
  }
  
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
      <div className="session-form">
        <h1>CREATE AN ACCOUNT</h1>
        <form>
          <label>
            EMAIL
            <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
          </label>

          <label>
            Username
            <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
          </label>
          
          <label>
            Password
            <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
          </label>

          <button type="submit" onClick={this.handleSubmit}>Sign Up!</button>
        </form>
      </div>
    )
  }
}