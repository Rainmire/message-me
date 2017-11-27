import { combineReducers } from 'redux';

import messages from './conversation_reducers';
import conversations from './conversation_list_reducers';

export default combineReducers({
  messages,
  conversations
});
