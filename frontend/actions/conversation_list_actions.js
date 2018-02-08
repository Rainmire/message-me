import * as APIUtil from 'util/conversation_list_api_util';
export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const RECEIVE_CURRENT_CONVERSATION_ID = 'RECEIVE_CURRENT_CONVERSATION_ID';

export const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATION,
  conversation
});


export const receiveCurrentConversationId = (currentConversationId) => ({
  type: RECEIVE_CURRENT_CONVERSATION_ID,
  id
});

export const fetchConversations = () => dispatch => (
  APIUtil.fetchConversations().then(conversations => (
    dispatch(receiveConversations(conversations))
  ))
);
