import { RECEIVE_USER_SELECTION, CLEAR_USER_SELECTIONS } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserSelectionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_SELECTION:
      const newSelection = {[action.user.id]: action.user};
      return merge({}, state, newSelection);
    case CLEAR_USER_SELECTIONS:
      return {};
    default:
      return state;
  }
};

export default UserSelectionReducer;
