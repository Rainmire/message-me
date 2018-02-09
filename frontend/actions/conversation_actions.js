import * as APIUtil from 'util/conversation_api_util';
import { browserHistory } from 'react-router';
import { receiveConversation } from 'actions/conversation_list_actions';
import { receiveMessages } from 'actions/message_actions';

// export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
// export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const CLEAR_MEMBERS = 'CLEAR_MEMBERS';
export const RECEIVE_CURRENT_CONVERSATION_ID = 'RECEIVE_CURRENT_CONVERSATION_ID';

// export const receiveMessage = message => ({
//   type: RECEIVE_MESSAGE,
//   message
// });

// export const receiveMessages = messages => ({
//   type: RECEIVE_MESSAGES,
//   messages
// });

export const receiveMembers = members => ({
  type: RECEIVE_MEMBERS,
  members
});

export const clearMembers = () => ({
  type: CLEAR_MEMBERS
});

export const receiveCurrentConversationId = (currentConversationId) => ({
  type: RECEIVE_CURRENT_CONVERSATION_ID,
  currentConversationId
});

export const createMessage = (formMessage, conversationId) => dispatch => (
  APIUtil.createMessage(formMessage, conversationId)
);

export const fetchConversationDetails = (conversationId) => dispatch => (
  APIUtil.fetchConversationDetails(conversationId).then((conversation) => {
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
