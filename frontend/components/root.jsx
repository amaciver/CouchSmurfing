import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import LandingView from './landing/landing_view';
import UserViewContainer from './user/user_view_container';
import CityViewContainer from './cities/city_view_container';
import HostViewContainer from './hosts/host_view_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/about');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={UserViewContainer} onEnter={_ensureLoggedIn}/>
          <Route path="/about" component={LandingView} />
          <Route path="/cities/:cityId" component={CityViewContainer} />
          <Route path="/hosts/:hostId" component={HostViewContainer} />
        </Route>
      </Router>
    </Provider>
  );
}

export default Root;
