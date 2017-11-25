import { combineReducers } from 'redux';

import conversation from './conversation_reducer';

export default combineReducers({
  messages: conversation
});
