import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from "../actions/session";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      console.log(action);
      return action;
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;