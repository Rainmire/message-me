// import React from 'react';
// import { Provider } from 'react-redux';
// import {
//   Route,
//   Redirect,
//   Switch,
//   Link,
//   HashRouter
// } from 'react-router-dom';
//
// import GreetingContainer from './greeting/greeting_container';
// import SessionFormContainer from './session_form/session_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
//
// const App = () => (
//   <div>
//     <header>
//       <Link to="/" className="header-link">
//         <h1>Bench BnB</h1>
//       </Link>
//       <GreetingContainer />
//     </header>
//     <Switch>
//       <AuthRoute path="/login" component={SessionFormContainer} />
//       <AuthRoute path="/signup" component={SessionFormContainer} />
//       <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
//       <Route path="/benches/:benchId" component={BenchShowContainer} />
//       <Route exact path="/" component={SearchContainer} />
//     </Switch>
//   </div>
// );
//
// export default App;
//
//
import React from 'react';

const App = () => (
  <div>
    <h1>Messenger-Clone</h1>
  </div>
);

export default App;
