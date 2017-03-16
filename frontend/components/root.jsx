import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LandingView from './landing/landing_view';
import UserViewContainer from './user/user_view_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={LandingView} />
        <Route path="/home" component={UserViewContainer} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
