import { RECEIVE_CURRENT_CONVERSATION_ID } from 'actions/conversation_list_actions';

const CurrentConversationIdReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_CONVERSATION_ID:
      return action.currentConversationId;
    default:
      return state;
  }
};

export default conversationListReducer;
