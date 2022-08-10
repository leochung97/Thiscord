import * as APIUtil from '../util/direct_message_api_util';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';
export const REMOVE_DIRECT_MESSAGE = 'REMOVE_DIRECT_MESSAGE';

const receiveDirectMessage = directMessage => {
  return {
    type: RECEIVE_DIRECT_MESSAGE,
    directMessage: directMessage
  }
};

const removeDirectMessage = directMessageId => {
  return {
    type: REMOVE_DIRECT_MESSAGE,
    directMessageId: directMessageId
  }
};

export const fetchDirectMessage = directMessageId => dispatch => {
  return APIUtil.fetchDirectMessage(directMessageId)
    .then(directMessage => dispatch(receiveDirectMessage(directMessage)))
};

export const createDirectMessage = (conversationId, directMessage) => dispatch => {
  return APIUtil.createDirectMessage(conversationId, directMessage)
    .then(directMessage => dispatch(receiveDirectMessage(directMessage)))
};

export const updateDirectMessage = directMessage => dispatch => {
  return APIUtil.updateDirectMessage(directMessage)
    .then(directMessage => dispatch(receiveDirectMessage(directMessage)))
}

export const deleteDirectMessage = directMessageId => dispatch => {
  return APIUtil.deleteDirectMessage(directMessageId)
    .then(() => dispatch(removeDirectMessage(directMessageId)))
}