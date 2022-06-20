import { combineReducers } from "redux";
import entities from "./entities_reducer";
import session from "./session";
import errors from "./errors_reducer";

const rootReducer = combineReducers({
  session, 
  errors,
});

export default rootReducer;