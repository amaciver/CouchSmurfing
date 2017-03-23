import React from 'react';
import {clearErrors} from '../../actions/session_actions';
import { connect } from 'react-redux';
import LandingHeader from './landing_header';

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
})

export default connect(null, mapDispatchToProps)(LandingHeader);
