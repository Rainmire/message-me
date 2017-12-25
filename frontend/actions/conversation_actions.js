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

export const createMessage = (formMessage, conversationId) => dispatch => (
  APIUtil.createMessage(formMessage, conversationId)
);

export const fetchConversationDetails = (conversationId) => dispatch => (
  APIUtil.fetchConversationDetails(conversationId).then(
    (conversation) => {
      dispatch(receiveMembers(conversation.members));
      dispatch(receiveMessages(conversation.messages));
    }
  )
);

export const createConversation = users => dispatch => (
  APIUtil.createConversation(users).then((conversationId) => {
    return conversationId;
  })
);

export const UPDATE_MEMBERS = 'UPDATE_MEMBERS';

const updateMembers = members => ({
  type: UPDATE_MEMBERS,
  members
});

export const addMembers = (users, id) => dispatch => (
  APIUtil.addMembers(users, id).then(members => (
      dispatch(updateMembers(members))
    )
  )
);
