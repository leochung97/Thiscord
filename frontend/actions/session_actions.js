import * as SessionAPIutil from "../util/session_api_util";
import { fetchUser } from '../util/user_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const login = (user) => (dispatch) =>
  SessionAPIutil.login(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => (dispatch) =>
  SessionAPIutil.logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const signup = (user) => (dispatch) =>
  SessionAPIutil.signup(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (err) => dispatch(receiveErrors(err.responseJSON))
  );

export const fetchCurrentUser = userId => dispatch => {
  return fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)))
}