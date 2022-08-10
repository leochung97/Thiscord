import { RECEIVE_MESSAGE, REMOVE_MESSAGE } from "../../actions/message_actions";
import { RECEIVE_CHANNEL } from "../../actions/channel_actions";

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_MESSAGE:
      newState = Object.assign({}, state);
      newState[action.message.id] = action.message;
      return newState;
    case REMOVE_MESSAGE:
      newState = Object.assign({}, state);
      delete newState[action.messageId];
      return newState;
    case RECEIVE_CHANNEL:
      if (action.channel.messages) return action.channel.messages;
      return {};
    default:
      return state;
  }
};

export default messagesReducer;
