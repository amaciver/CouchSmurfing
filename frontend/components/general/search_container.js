import React from 'react';
import {connect} from 'react-redux';
import Search from './search';
import { fetchCities } from '../../actions/cities_actions';

const mapStateToProps = state => ({
  cities: Object.keys(state.cities).map( id => state.cities[id])

});

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities())

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
