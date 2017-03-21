import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root'

import * as SessionActions from './actions/session_actions';
import * as CitiesActions from './actions/cities_actions';
import * as HostsActions from './actions/hosts_actions';
import * as ReviewsActions from './actions/reviews_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors:[] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  window.store = store;
  window.fetchCities = CitiesActions.fetchCities;
  window.fetchCity = CitiesActions.fetchCity;

  window.fetchHosts = HostsActions.fetchHosts;
  window.fetchHost = HostsActions.fetchHost;

  window.fetchReviews = ReviewsActions.fetchReviews;

  window.signup = SessionActions.signup;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;

  ReactDOM.render(<Root store={store} />, root);
});
