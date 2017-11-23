
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
import ConversationsContainer from './conversations/conversations_container';

const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/" render={()=>(<Redirect to="/login"/>)} />
      <ProtectedRoute path="/conversations" component={ConversationsContainer} />
    </Switch>
  </div>
);

export default App;
