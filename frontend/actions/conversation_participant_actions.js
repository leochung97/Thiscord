import * as APIUtil from '../util/conversation_participant_api_util';
export const RECEIVE_CONVERSATION_PARTICIPATION = 'RECEIVE_CONVERSATION_PARTICIPATION';
export const REMOVE_CONVERSATION_PARTICIPATION = 'REMOVE_CONVERSATION_PARTICIPATION';

const receiveConversationParticipation = conversationParticipation => {
  return {
    type: RECEIVE_CONVERSATION_PARTICIPATION,
    conversationParticipation: conversationParticipation
  }
};

const removeConversationParticipation = conversationParticipation => {
  return {
    type: REMOVE_CONVERSATION_PARTICIPATION,
    conversationParticipation: conversationParticipation
  }
};

export const createConversationParticipation = conversationParticipation => dispatch => {
  return APIUtil.createConversationParticipation(conversationParticipation)
    .then(conversationParticipation => dispatch(receiveConversationParticipation(conversationParticipation)))
}

export const deleteConversationParticipation = conversationParticipation => dispatch => {
  return APIUtil.deleteConversationParticipation(conversationParticipation)
    .then(conversationParticipation => dispatch(removeConversationParticipation(conversationParticipation)))
}