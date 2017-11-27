import { combineReducers } from 'redux';

import messages from './message_reducers';
import conversations from './conversation_list_reducers';
import members from './members_reducers';

export default combineReducers({
  messages,
  conversations,
  members
});
