import * as APIUtil from '../util/conversation_api_util';
import { browserHistory } from 'react-router';
import {receiveConversation} from './conversation_list_actions';

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

// export const fetchConversation = (conversationId) => dispatch => (
//   APIUtil.fetchConversation(conversationId).then(conversation => (
//     dispatch(receiveMembers(conversation.members))
//   )).then(conversation => (
//     dispatch(receiveMessages(conversation.messages))
//   ))
// );

export const fetchConversationDetails = (conversationId) => dispatch => (
  APIUtil.fetchConversationDetails(conversationId).then(
    (conversation) => {
      dispatch(receiveMembers(conversation.members));
      dispatch(receiveMessages(conversation.messages));
    }
  )
);
//QUESTION multiple dispatch in a then, does it wait until both are finished?

export const createConversation = formConversation => dispatch => (
  APIUtil.createConversation(formConversation).then(conversation => {
    dispatch(receiveMembers(conversation.members));
    dispatch(receiveMessages(null));
    dispatch(receiveConversation({[conversation.id]: {title: conversation.title}}));
    return conversation.id;
  })
);

// export const receiveConversation = conversation => ({
//   type: RECEIVE_MESSAGES,
//   messages
// });
