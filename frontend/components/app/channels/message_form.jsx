import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }
  
  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
    App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
    this.setState({ body: "" });
  }

  render() {    
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="message-input-box">
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Message #"
          />
          <button type="submit"/>
        </form>
      </div>
    );
  }
}

const mSTP = state => ({
  currentUserId: state.session.id,
});

const mDTP = dispatch => ({
  
});

export default withRouter(connect(mSTP, mDTP)(MessageForm));