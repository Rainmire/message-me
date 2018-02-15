import { RECEIVE_MEMBERS, UPDATE_MEMBERS, CLEAR_MEMBERS } from '../actions/conversation_actions';
import merge from 'lodash/merge';

const membersReducers = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MEMBERS:
      return action.members;
    case UPDATE_MEMBERS:
      let newState = Object.assign([], state);
      return newState.concat(action.members);
    case CLEAR_MEMBERS:
      return [];
    default:
      return state;
  }
};

export default membersReducers;
