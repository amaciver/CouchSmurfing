import React from 'react';
import { connect } from 'react-redux';
import CitiesIndex from './cities_index';
import { fetchCities, fetchCity } from '../../actions/cities_actions';

const mapStateToProps = state => {
  const cities = Object.keys(state.cities).map( id => state.cities[id] )
  return ({

    cities: cities

  });
}

const mapDispatchToProps = dispatch => ({
  fetchCities: (query_string) => dispatch(fetchCities(query_string)),
  fetchCity: (id) => dispatch(fetchCity(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesIndex)
