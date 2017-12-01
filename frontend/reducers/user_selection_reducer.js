import { RECEIVE_USER_SELECTION } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserSelectionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_SELECTION:
      const newSelection = {[action.user.id]: action.user};
      return merge({}, state, newSelection);
    default:
      return state;
  }
};

export default UserSelectionReducer;
