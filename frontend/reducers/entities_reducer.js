import { combineReducers } from 'redux';

import messages from './message_reducer';
import conversations from './conversation_list_reducer';
import members from './members_reducer';
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
