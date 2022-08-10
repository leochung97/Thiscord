import { combineReducers } from "redux";
import entities from "./entities_reducer";
import session from "./sessions/session_reducer";
import errors from "./errors_reducer";
import ui from "./ui/ui_reducer";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
});

export default rootReducer;
