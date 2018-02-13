import { combineReducers } from 'redux';

import globalLoading from './global_loading_reducer';
import conversationLoading from './conversation_loading_reducer';

export default combineReducers({
  globalLoading,
  conversationLoading
});
