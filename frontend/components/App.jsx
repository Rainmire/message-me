
import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  withRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MessageListContainer from './message_list/message_list_container';
import ConversationListContainer from './conversation_list/conversation_list_container';
import MessageInputContainer from './message_input/message_input_container';
import NewConversationContainer from './new_conversation/new_conversation_container';
import MemberListContainer from './member_list/member_list_container';

const App = () => (
  <div className="app">
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" render={()=>(<Redirect to="/login"/>)} />

    <div className="main-content">
      <Route exact path="/conversations" render={
          ()=><div className="navbar">Loading</div>
      } />

      <ProtectedRoute path="/conversations" component={ConversationListContainer} />
      <Switch>
        <ProtectedRoute exact path="/conversations/new" component={NewConversationContainer} />
        <ProtectedRoute exact path="/conversations/:id" component={MessageListContainer} />
      </Switch>
      <ProtectedRoute path="/conversations/:id" component={MemberListContainer} />
    </div>
  </div>
);

export default App;

// <ProtectedRoute path="/conversations" component={ConversationsContainer} />
// <ProtectedRoute path="/conversations" component={MessageInputContainer} />

// <EnsureSelectConvoRoute exact path="/conversations" />

// <ProtectedRoute exact path="/conversations/:id" component={MessageInputContainer} />
