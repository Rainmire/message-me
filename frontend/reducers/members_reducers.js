import { RECEIVE_MEMBERS } from '../actions/conversation_actions';

const membersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MEMBERS:
      return action.members;
    default:
      return state;
  }
};

export default membersReducer;
