import {
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL,
  RECEIVE_CHANNEL_ERRORS,
} from "../../actions/channel_actions";

const channelErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return [];
    case REMOVE_CHANNEL:
      return [];
    case RECEIVE_CHANNEL_ERRORS:
      if (action.errors == undefined) {
        action.errors = [];
      }
      return action.errors;
    default:
      return state;
  }
};

export default channelErrorsReducer;
