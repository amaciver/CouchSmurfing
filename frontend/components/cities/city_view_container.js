import React from 'react';
import { connect } from 'react-redux';
import CityView from './city_view';
// import fetchCity from '../../actions/cities_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  city: state.currentCity,
  hosts: state.hosts
});

const mapDispatchToProps = (dispatch) => ({
  fetchCity: (id) => dispatch(fetchCity(id)),
  fetchHosts: (id) => dispatch(fetchHosts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityView);
