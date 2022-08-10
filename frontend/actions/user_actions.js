import * as userApiUtil from "../util/user_api_util"
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user: user
  }
}

export const fetchUser = userId => dispatch => {
  return userApiUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
}

export const updateUser = user => dispatch => {
  return userApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)))
}