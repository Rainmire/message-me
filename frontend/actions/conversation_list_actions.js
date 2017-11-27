import * as APIUtil from '../util/conversation_list_api_util';
export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS';

export const receiveConversations = conversations => ({
  type: RECEIVE_CONVERSATIONS,
  conversations
});


export const fetchConversations = () => dispatch => (
  APIUtil.fetchConversations().then(conversations => (
    dispatch(receiveConversations(conversations))
  ))
);

// export const fetchConversations = () => dispatch => (
//   APIUtil.fetchConversations().then(conversations => {
//     debugger;
//     return dispatch(receiveConversations(conversations));
//   })
// );
