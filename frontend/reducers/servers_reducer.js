import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";

const serversReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_SERVER:
      newState.push(action.server.server);
      return newState;
    case RECEIVE_SERVERS:
      return action.servers;
    case REMOVE_SERVER:
      return newState.filter(server => server.id != action.server.id)
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default serversReducer;