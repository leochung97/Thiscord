import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
} from "../../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors == undefined) {
        action.errors = [];
      }
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
