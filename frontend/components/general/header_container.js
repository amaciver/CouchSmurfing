import React from 'react';
import {clearErrors} from '../../actions/session_actions';
import { connect } from 'react-redux';
import Header from './header';

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
})

export default connect(null, mapDispatchToProps)(Header);
