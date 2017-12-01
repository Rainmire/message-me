import { combineReducers } from 'redux';

import messages from './message_reducers';
import conversations from './conversation_list_reducers';
import members from './members_reducers';
import userSearchResults from './user_search_reducer';

export default combineReducers({
  messages,
  conversations,
  members,
  userSearchResults
});
