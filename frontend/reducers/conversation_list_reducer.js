import { RECEIVE_CONVERSATIONS } from 'actions/conversation_list_actions';
import { RECEIVE_NOTIFICATION } from 'actions/message_actions';
import merge from 'lodash/merge';

const conversationListReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONVERSATIONS:
      return action.conversations;
    case RECEIVE_NOTIFICATION:
      let message = action.notification;
      let newConversations = [message];
      state.forEach((conversation) => {
        if (conversation.conversationId === message.conversationId) {
          newConversations[0].title = conversation.title;
        }
        else {
          newConversations.push(conversation);
        }
      })
      return newConversations;
    default:
      return state;
  }
};

export default conversationListReducer;