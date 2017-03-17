import React from 'react';
import { connect } from 'react-redux';
import CitiesIndex from './cities_index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchCities: (query_string) => dispatch(fetchCities(query_string)) 

});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesIndex)
