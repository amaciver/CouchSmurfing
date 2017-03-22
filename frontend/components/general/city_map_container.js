import React from 'react';
import {connect} from 'react-redux';
import CityMap from './city_map';

const mapStateToProps = state => ({
  hosts: Object.keys(state.hosts).map( id => state.hosts[id]),
  lat: state.currentCity.lat,
  lng: state.currentCity.lng

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CityMap);
