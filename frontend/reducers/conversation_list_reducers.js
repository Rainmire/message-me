import { RECEIVE_CONVERSATIONS } from 'actions/conversation_list_actions';
import { RECEIVE_CONVERSATION } from 'actions/conversation_list_actions';
import merge from 'lodash/merge';


const conversationListReducer = (state = {}, action) => {
  debugger;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CONVERSATION:
      return merge({}, state, action.conversation);
    case RECEIVE_CONVERSATIONS:
    debugger;
      return action.conversations;
    default:
      return state;
  }
};

export default conversationListReducer;
