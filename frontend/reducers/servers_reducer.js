import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";

const _nullUser = Object.freeze({
  id: null
});

const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SERVER:
      newState[action.server.id] = action.server;
      return newState;
    case RECEIVE_SERVERS:
      return action.servers;
    case REMOVE_SERVER:
      delete newState[action.serverId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
}

export default serversReducer;