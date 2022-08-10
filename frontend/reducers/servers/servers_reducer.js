import {
  RECEIVE_SERVER,
  RECEIVE_SERVERS,
  REMOVE_SERVER,
} from "../../actions/server_actions";
import {
  RECEIVE_SERVER_MEMBERSHIP
} from "../../actions/server_membership_actions";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const serversReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState;
  switch (action.type) {
    case RECEIVE_SERVER:
      const newServer = { [action.server.id]: action.server };
      return Object.assign({}, state, newServer);
    case RECEIVE_SERVERS:
      return Object.assign({}, action.servers);
    case REMOVE_SERVER:
      newState = Object.assign({}, state);
      delete newState[action.server.id];
      return newState;
    case RECEIVE_SERVER_MEMBERSHIP:
      newState = Object.assign({}, state);
      newState[action.membership.server.id] = action.membership.server;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default serversReducer;
