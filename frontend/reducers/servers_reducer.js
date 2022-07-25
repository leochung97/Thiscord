import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";

const serversReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_SERVER:
      if (newState.length > 0) {
        for (let i = 0; i < newState.length; i++) {
          if (newState[i].id === action.server.id) {
            newState[i] = action.server;
            return newState;
          } else {
            newState.unshift(action.server);
            return newState;
          }
        }
      } else {
        newState.push(action.server);
        return newState;
      }
    case RECEIVE_SERVERS:
      if (newState.length > 0) {
        return newState;
      } else {
        newState = [...action.servers];
        return newState;
      }
    case REMOVE_SERVER:
      return newState.filter(server => server.id != action.serverId);
    case RECEIVE_CHANNEL:
      let index = newState.findIndex(server => server.id === action.channel.server_id);
      newState[index].channels.push(action.channel);
      return newState;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
}

export default serversReducer;