import { RECEIVE_MEMBERS, UPDATE_MEMBERS } from '../actions/conversation_actions';
import merge from 'lodash/merge';

const membersReducers = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MEMBERS:
      return action.members;
    case UPDATE_MEMBERS:
      return merge({}, state, action.members);
    // case RECEIVE_PROFILE_PIC:
    default:
      return state;
  }
};

export default membersReducers;
