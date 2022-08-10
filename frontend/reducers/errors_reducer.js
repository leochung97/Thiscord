import { combineReducers } from "redux";
import sessionErrorsReducer from "./sessions/session_errors_reducer";
import serverErrorsReducer from "./servers/server_errors_reducer";
import channelErrorsReducer from "./channels/channel_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  server: serverErrorsReducer,
  channel: channelErrorsReducer,
});

export default errorsReducer;
