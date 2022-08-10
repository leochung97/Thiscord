import { connect } from "react-redux";
import { updateMessage, deleteMessage } from "../../actions/message_actions";
import message_content from "./message_content";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    updateMessage: (message) => dispatch(updateMessage(message)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
  };
};

export default connect(mSTP, mDTP)(message_content);
