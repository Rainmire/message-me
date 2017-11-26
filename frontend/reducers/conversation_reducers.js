import merge from 'lodash/merge';

import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/conversation_actions';

const conversationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      const newMessage = {[action.message.id]: action.message};
      return merge({}, state, newMessage);
    case RECEIVE_MESSAGES:
      debugger;
      // const nextState = action.messages.values;
      // const nextState = {};
      // action.messages.forEach(message => (nextState[message.id] = message));
      return Object.values(action.messages);
    default:
      return state;
  }
};


export default conversationReducer;
