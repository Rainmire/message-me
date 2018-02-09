import merge from 'lodash/merge';

import { RECEIVE_MESSAGES } from 'actions/conversation_actions';
import { RECEIVE_MESSAGE } from 'actions/message_actions';

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      const newMessage = {[action.message.id]: action.message};
      return merge({}, state, newMessage);
    case RECEIVE_MESSAGES:
      if (action.messages == null)
        return {};
      else {
      return action.messages;
      }
    default:
      return state;
  }
};


export default messageReducer;
