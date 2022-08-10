import {
  RECEIVE_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  REMOVE_CONVERSATION,
} from "../../actions/conversation_actions";
import { RECEIVE_CONVERSATION_PARTICIPATION } from "../../actions/conversation_participant_actions";

const conversationsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return Object.assign({}, action.conversations);
    case RECEIVE_CONVERSATION:
      const newConversation = { [action.conversation.id]: action.conversation };
      return Object.assign({}, state, newConversation);
    case REMOVE_CONVERSATION:
      newState = Object.assign({}, state);
      delete newState[action.conversationId];
      return newState;
    case RECEIVE_CONVERSATION_PARTICIPATION:
      newState = Object.assign({}, state);
      newState[action.conversationParticipation.conversation.id] =
        action.conversationParticipation.conversation;
      return newState;
    default:
      return state;
  }
};

export default conversationsReducer;
