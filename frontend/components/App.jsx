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
import NewConversationContainer from './new_conversation/new_conversation_container';
import ConversationSpecific from './conversation_specific/conversation_specific';
import Navbar from './navbar/navbar';
const App = () => (
  <div className="app">
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route exact path="/" render={()=>(<Redirect to="/login"/>)} />

    <div className="main-content">
      <ProtectedRoute path="/conversations" component={Navbar} />
      <Switch>
        <ProtectedRoute exact path="/conversations/new" component={NewConversationContainer} />
        <ProtectedRoute exact path="/conversations/:id" component={ConversationSpecific} />
      </Switch>
    </div>
  </div>
);

export default App;