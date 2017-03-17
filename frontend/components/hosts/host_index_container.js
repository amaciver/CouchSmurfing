import React from 'react';
import { connect } from 'react-redux';
import HostIndex from './host_index';

const mapStateToProps = state => ({
  hosts: Object.keys(state.hosts).map( id => state.hosts[id] )
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HostIndex);
