import React from 'react';
import MessageListContainer from './message_list/message_list_container';
import MemberListContainer from './member_list/member_list_container';
import {
  Route,
} from 'react-router-dom';

const ConversationSpecific = () => (
  <div>
    <Route exact path="/conversations/:id" component={MessageListContainer} />
    <Route exact path="/conversations/:id" component={MemberListContainer} />
  </div>
);

export default ConversationSpecific;
