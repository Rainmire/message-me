import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// import { login, logout, signup } from './actions/session_actions';
import { createMessage, fetchConversationDetails } from './actions/conversation_actions';
import { logout } from './util/session_api_util';
import { fetchMessages } from './util/conversation_api_util';

import { fetchConversations } from './actions/conversation_list_actions';
// import { fetchConversations } from './util/conversation_list_api_util';
import { fetchMembers } from './actions/conversation_actions';

import { searchUserDatabase } from './util/user_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createMessage = createMessage;
  window.fetchMessages = fetchMessages;

  // window.login = login;
  // window.signup = signup;

  window.logout = logout;
  // window.utilLogout = utilLogout;

  window.fetchConversations = fetchConversations;

  window.fetchMembers = fetchMembers;

  window.fetchConversationDetails = fetchConversationDetails;

  window.searchUserDatabase = searchUserDatabase;

  // ReactDOM.render(<h1>Welcome to Messenger</h1>,root);
  ReactDOM.render(<Root store={store}/>, root);
});
