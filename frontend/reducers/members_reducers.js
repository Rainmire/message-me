import { RECEIVE_MEMBERS, UPDATE_MEMBERS } from '../actions/conversation_actions';
import merge from 'lodash/merge';

const membersReducers = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MEMBERS:
      return action.members;
    case UPDATE_MEMBERS:
      debugger;
      return merge({}, state, action.members);
    default:
      return state;
  }
};

export default membersReducers;
