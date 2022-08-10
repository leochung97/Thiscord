import * as ServerMembershipApiUtil from '../util/server_membership_api_util'
export const RECEIVE_SERVER_MEMBERSHIP = 'RECEIVE_SERVER_MEMBERSHIP';
export const REMOVE_SERVER_MEMBERSHIP = 'REMOVE_SERVER_MEMBERSHIP';

const receiveServerMembership = membership => {
  return {
    type: RECEIVE_SERVER_MEMBERSHIP,
    membership: membership
  };
};

const removeServerMembership = user => {
  return {
    type: REMOVE_SERVER_MEMBERSHIP,
    user: user
  };
};

export const createServerMembership = membership => dispatch => {
  ServerMembershipApiUtil.createServerMembership(membership)
    .then(membership => dispatch(receiveServerMembership(membership)))
}

export const deleteServerMembership = membership => dispatch => {
  ServerMembershipApiUtil.deleteServerMembership(membership)
    .then(user => dispatch(removeServerMembership(user)))
}