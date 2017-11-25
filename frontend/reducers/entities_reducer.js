import { combineReducers } from 'redux';

import conversation from './conversation_reducers';

export default combineReducers({
  messages: conversation
});
