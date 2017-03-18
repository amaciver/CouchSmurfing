import React from 'react';
import {connect} from 'react-redux';
import Search from './search';

const mapStateToProps = state => ({
  cities: Object.keys(state.cities).map( id => state.cities[id])

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
