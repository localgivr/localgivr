import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

// import page components 
import Layout from './components/Layout';
import Homepage from './components/Homepage'
import Signup from './components/Signup'
import OrgSignup from './components/OrgSignup'
import Give from './components/Give'
import Request from './components/Request'
import UserProfile from './components/UserProfile'
import OrgProfile from './components/OrgProfile'
import UserOnboard from'./components/UserOnboard'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Homepage} />
          <Route path='signup' component={Signup} />
          <Route path='organization-signup' component={OrgSignup} />
          <Route path='give' component={Give} />
          <Route path='request' component={Request} />
          <Route path='profile' component={UserProfile} />
          <Route path='organization-profile' component={OrgProfile} />
          <Route path='causes' component={UserOnboard} />
        </Route>
    </Router>,
  document.getElementById('root')
);
