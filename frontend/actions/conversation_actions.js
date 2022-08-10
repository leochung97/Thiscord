import * as  APIUtil from "../util/conversation_api_util";
export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";

const receiveConversations = conversations => {
  return {
    type: RECEIVE_CONVERSATIONS,
    conversations: conversations
  }
};

const receiveConversation = conversation => {
  return {
    type: RECEIVE_CONVERSATION,
    conversation: conversation
  }
};

const removeConversation = conversationId => {
  return {
    type: REMOVE_CONVERSATION,
    conversationId: conversationId
  }
};

export const fetchConversations = () => dispatch => {
  return APIUtil.fetchConversations()
    .then(conversations => dispatch(receiveConversations(conversations)))
}

export const fetchConversation = conversationId => dispatch => {
  return APIUtil.fetchConversation(conversationId)
    .then(conversation => dispatch(receiveConversation(conversation)))
}

export const createConversation = () => dispatch => {
  return APIUtil.createConversation()
    .then(conversation => dispatch(receiveConversation(conversation)))
}

export const deleteConversation = conversationId => dispatch => {
  return APIUtil.deleteConversation(conversationId)
    .then(() => dispatch(removeConversation(conversationId)))
}