import merge from 'lodash/merge';

import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from 'actions/message_actions';

const messageReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGE:
      // debugger;
      // const newMessage = {[action.message.id]: action.message};
      // return merge({}, state, action.message);
      return Object.assign([], state).concat(action.message)
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
