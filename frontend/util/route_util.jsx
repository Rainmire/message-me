import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/conversations" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

// const EnsureSelectConvo = ({ component: Component, path, conversations }) => {
//   const conversationId = Object.keys(conversations)[0];
//   debugger;
//   return <Route path={path} render={(props) => (
//     <Redirect to={`/conversations/${conversationId}`} />
//   )} />;
// };

const mapStateToProps = state => (
  {
    loggedIn: Boolean(state.session.currentUser),
    conversations: state.entities.conversations
  }
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

// export const EnsureSelectConvoRoute = withRouter(connect(mapStateToProps, null)(EnsureSelectConvo));
