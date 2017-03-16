import React from 'react';
import { connect } from 'react-redux';
import {logout} from  '../../actions/session_actions';
import UserDropdown from './user_dropdown_container';

const mapStateToProps = state => ({
  username: state.currentUser.username,
  image_url: state.currentUser.image_url
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
