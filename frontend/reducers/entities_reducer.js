import { combineReducers } from 'redux';

import messages from './message_reducers';
import conversations from './conversation_list_reducers';
import members from './members_reducers';
import userSearchResults from './user_search_reducer';
import userSelections from './user_selection_reducer';
import currentConversationId from './current_conversation_id_reducer';

export default combineReducers({
  currentConversationId,
  messages,
  conversations,
  members,
  userSearchResults,
  userSelections
});
