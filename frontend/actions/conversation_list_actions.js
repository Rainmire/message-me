import * as APIUtil from '../util/conversation_list_api_util';
export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';


export const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});

export const receiveConversation = conversation => ({
  type: RECEIVE_CONVERSATION,
  conversation
});

export const fetchConversations = () => dispatch => (
  APIUtil.fetchConversations().then(conversations => (
    dispatch(receiveConversations(conversations))
  ))
);
