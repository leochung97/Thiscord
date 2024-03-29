import { OPEN_MODAL } from "../../actions/modal_actions";
import {
  RECEIVE_SERVER_ERRORS,
  RECEIVE_SERVER,
  REMOVE_SERVER,
} from "../../actions/server_actions";

const serverErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
      if (action.errors == undefined) {
        action.errors = [];
      }
      return action.errors;
    case RECEIVE_SERVER:
      return [];
    case REMOVE_SERVER:
      return [];
    case OPEN_MODAL:
      return [];
    default:
      return state;
  }
};

export default serverErrorsReducer;
