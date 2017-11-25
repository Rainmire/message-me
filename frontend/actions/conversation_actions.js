import * as APIUtil from '../util/conversation_api_util';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const createMessage = formMessage => dispatch => (
  APIUtil.createMessage(formMessage).then(message => (
    dispatch(receiveMessage(message))
  ))
);

export const fetchMessages = () => dispatch => (
  APIUtil.fetchMessages().then(messages => (
    dispatch(receiveMessages(messages))
  ))
);
