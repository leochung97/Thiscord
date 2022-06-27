import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const channelsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_CHANNEL:
      newState.push(action.channel);
      return newState;
    case REMOVE_CHANNEL:
      return newState.filter(channel => channel.id != action.channelId);
    default:
      return state;
  }
}

export default channelsReducer;