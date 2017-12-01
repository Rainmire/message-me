import { RECEIVE_USER_SEARCH_RESULTS } from '../actions/user_actions';

const UserSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_SEARCH_RESULTS:
      return action.users;
    default:
      return state;
  }
};

export default UserSearchReducer;
