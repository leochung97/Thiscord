import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';

const receiveChannel = channel => {
  return {
    type: RECEIVE_CHANNEL,
    channel: channel
  };
};

const removeChannel = channel => {
  return {
    type: REMOVE_CHANNEL,
    channel: channel
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors: errors
  };
};

export const fetchChannel = channelId => dispatch => {
  return APIUtil.fetchChannel(channelId)
    .then(channel => dispatch(receiveChannel(channel)))
};

export const createChannel = (channel, serverId) => dispatch => {
  return APIUtil.createChannel(channel, serverId)
    .then(channel => (dispatch(receiveChannel(channel))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ));
}

export const updateChannel = channel => dispatch => {
  return APIUtil.updateChannel(channel)
    .then(channel => (dispatch(receiveChannel(channel))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ));
}

export const deleteChannel = channelId => dispatch => {
  return APIUtil.deleteChannel(channelId)
    .then(channel => (dispatch(removeChannel(channel))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ));
};