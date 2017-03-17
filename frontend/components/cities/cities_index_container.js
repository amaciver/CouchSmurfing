import React from 'react';
import { connect } from 'react-redux';
import CitiesIndex from './cities_index';

const mapStateToProps = state => {
  const cities = Object.keys(state.cities).map( id => state.cities[id] )
  return ({

    cities: cities

  });
}

const mapDispatchToProps = dispatch => ({
  fetchCities: (query_string) => dispatch(fetchCities(query_string))

});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesIndex)
