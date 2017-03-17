import React from 'react';
import { connect } from 'react-redux';
import HostView from './host_view';
// import fetchCity from '../../actions/cities_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser,
  host: state.currentHost
});

const mapDispatchToProps = (dispatch) => ({
  fetchHost: (id) => dispatch(fetchHost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HostView);
