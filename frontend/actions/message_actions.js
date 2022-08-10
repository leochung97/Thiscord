import * as APIUtil from '../util/message_api_util';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message: message
  };
};

const removeMessage = messageId => {
  return {
    type: REMOVE_MESSAGE,
    messageId
  }
}

export const fetchMessage = messageId => dispatch => {
  return APIUtil.fetchMessage(messageId)
    .then(message => dispatch(receiveMessage(message)))
};

export const createMessage = (serverId, channelId, message) => dispatch => {
  return APIUtil.createMessage(serverId, channelId, message)
    .then(message => dispatch(receiveMessage(message)))
};

export const updateMessage = message => dispatch => {
  return APIUtil.updateMessage(message)
    .then(message => dispatch(receiveMessage(message)))
}

export const deleteMessage = messageId => dispatch => {
  return APIUtil.deleteMessage(messageId)
    .then(message => dispatch(removeMessage(message)))
}