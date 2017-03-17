import React from 'react';
import { connect } from 'react-redux';
import CityView from './user_view';

const mapStateToProps = (state) => ({
  user: state.session.currentUser
});

export default connect(mapStateToProps, null)(CityView);
