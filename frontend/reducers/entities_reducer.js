import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import serversReducer from "./servers/servers_reducer";
import channelsReducer from "./channels/channels_reducer";
import messagesReducer from "./channels/messages_reducer";
import directMessagesReducer from "./conversations/direct_messages_reducer";
import conversationsReducer from "./conversations/conversations_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
  direct_messages: directMessagesReducer,
  channels: channelsReducer,
});

export default entitiesReducer;
