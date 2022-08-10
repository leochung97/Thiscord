import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_SERVER_MEMBERSHIP,
  REMOVE_SERVER_MEMBERSHIP,
} from "../actions/server_membership_actions";
import { RECEIVE_SERVER, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser,
      });
    case RECEIVE_SERVER_MEMBERSHIP:
      newState = Object.assign({}, state);
      newState[action.membership.user_id] = action.membership.current_user;
      return newState;
    case REMOVE_SERVER_MEMBERSHIP:
      newState = Object.assign({}, state);
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_SERVER:
      return action.server.users;
    case REMOVE_SERVER:
      newState = Object.assign({}, state);
      newState[action.server.currentUser.id] = action.server.currentUser;
    default:
      return state;
  }
};

export default usersReducer;