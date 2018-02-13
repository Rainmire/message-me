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
          ? {
              id: conversation.id,
              title: conversation.title,
              authorPic: message.profile_pic,
              authorName: message.display_name,
              messageBody: message.body,
              messageCreatedAt: message.created_at
          }
          : conversation
      )

      return state;
    default:
      return state;
  }
};

export default conversationListReducer;

//////////////////////////////////////////////////////

// SELECT * FROM conversations
// JOIN messages ON conversations.id = messages.conversation_id
// ORDER BY messages.created_at DESC
