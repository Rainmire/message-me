import * as APIUtil from '../util/conversation_api_util';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveMembers = members => ({
  type: RECEIVE_MEMBERS,
  members
});

export const createMessage = formMessage => dispatch => (
  APIUtil.createMessage(formMessage).then(message => (
    console.log(`message sent: ${message}`)
  ))
);

export const fetchMessages = () => dispatch => (
  APIUtil.fetchMessages().then(messages => (
    dispatch(receiveMessages(messages))
  ))
);

export const fetchMembers = (conversationId) => dispatch => (
  APIUtil.fetchMembers(conversationId).then(members => (
    dispatch(receiveMembers(members))
  ))
);

export const fetchConversations = (conversationId) => dispatch => (
  APIUtil.fetchConversation(conversationId).then(conversation => (
    dispatch(receiveMembers(conversation.members))
  )).then(conversation => (
    dispatch(receiveMessages(conversation.messages))
  ))
);
