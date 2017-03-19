import React from 'react';
import { connect } from 'react-redux';
import HostIndexItem from './host_index_item';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchHost: hostId => dispatch(fetchHost(hostId))
})

export default connect(mapStateToProps, mapDispatchToProps)(HostIndexItem);
