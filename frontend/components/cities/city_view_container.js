import React from 'react';
import { connect } from 'react-redux';
import CityView from './city_view';
import {fetchCity, clearCity} from '../../actions/cities_actions';
import {fetchHosts, clearHosts} from '../../actions/hosts_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  city: state.currentCity,
  hosts: Object.keys(state.hosts).map( id => state.hosts[id])
});

const mapDispatchToProps = (dispatch) => ({
  fetchCity: (id) => dispatch(fetchCity(id)),
  fetchHosts: (id) => dispatch(fetchHosts(id)),
  clearCity: city => dispatch(clearCity(city)),
  clearHosts: hosts => dispatch(clearHosts(hosts))
});

export default connect(mapStateToProps, mapDispatchToProps)(CityView);
