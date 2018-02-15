import * as APIUtil from 'util/conversation_api_util';
import { browserHistory } from 'react-router';
import { receiveMessages } from 'actions/message_actions';

export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';
export const CLEAR_MEMBERS = 'CLEAR_MEMBERS';
export const RECEIVE_CURRENT_CONVERSATION_ID = 'RECEIVE_CURRENT_CONVERSATION_ID';
export const START_LOADING_DETAILS = 'START_LOADING_DETAILS';
export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';

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

const startLoadingDetails = () => ({
  type: START_LOADING_DETAILS
})

const receiveDetails = () => ({
  type: RECEIVE_DETAILS
})

export const fetchConversationDetails = (conversationId) => dispatch => {
  dispatch(startLoadingDetails());
  return APIUtil.fetchConversationDetails(conversationId).then((conversation) => {
      dispatch(receiveMembers(conversation.members));
      dispatch(receiveMessages(conversation.messages));
    }
  ).then(() => (
    dispatch(receiveDetails())
  ));
};

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

// export const addMembers = (users, convoId) => dispatch => {
//   let userIds = users.map((user) => (user.userId));
//   APIUtil.addMembers(userIds, convoId).then(members => (
//       dispatch(updateMembers(members))
//     )
//   )
// };

export const addMembers = (users, convoId) => dispatch => {
  let userIds = users.map((user) => (user.userId));
  APIUtil.addMembers(userIds, convoId);
};