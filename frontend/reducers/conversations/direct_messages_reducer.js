import {
  RECEIVE_DIRECT_MESSAGE,
  REMOVE_DIRECT_MESSAGE,
} from "../../actions/direct_message_actions";
import { RECEIVE_CONVERSATION } from "../../actions/conversation_actions";

const directMessagesReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_DIRECT_MESSAGE:
      newState = Object.assign({}, state);
      newState[action.directMessage.id] = action.directMessage;
      return newState;
    case REMOVE_DIRECT_MESSAGE:
      newState = Object.assign({}, state);
      delete newState[action.directMessageId];
      return newState;
    case RECEIVE_CONVERSATION:
      if (action.conversation.direct_messages)
        return action.conversation.direct_messages;
      return {};
    default:
      return state;
  }
};

export default directMessagesReducer;
