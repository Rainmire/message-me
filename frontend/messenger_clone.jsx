import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/root';
import configureStore from 'store/store';

import { createMessage, fetchConversationDetails } from './actions/conversation_actions';
import { logout } from 'util/session_api_util';
import { fetchMessages } from 'util/conversation_api_util';

import { fetchConversations } from 'actions/conversation_list_actions';
import { fetchMembers } from 'actions/conversation_actions';

import { searchUserDatabase } from 'util/user_api_util';

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


  ReactDOM.render(<Root store={store}/>, root);
});
