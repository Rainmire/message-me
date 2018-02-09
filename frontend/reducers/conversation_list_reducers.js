import { RECEIVE_CONVERSATIONS } from 'actions/conversation_list_actions';
import { RECEIVE_NOTIFICATION } from 'actions/message_actions';
import { selectConversationIndexById } from 'reducers/selectors';
import merge from 'lodash/merge';

const conversationListReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONVERSATIONS:
      return action.conversations;
    case RECEIVE_NOTIFICATION:
      let message = action.notification;
      let idx = selectConversationIndexById(action.notification.conversation_id);
      return state.map(conversation =>
        (conversation.id === message.conversation_id)
          ? {...conversation, 
            authorPic: message.author.profile_pic, 
            messageBody: message.body,
            messageCreatedAt: message.create_at
          }
          : conversation
      )
    default:
      return state;
  }
};

export default conversationListReducer;
