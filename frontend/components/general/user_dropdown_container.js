import React from 'react';
import { connect } from 'react-redux';
import {logout} from  '../../actions/session_actions';
import UserDropdown from './user_dropdown';

const mapStateToProps = state => {
  let username;
  let image_url;
  if (state.session.currentUser) {
    username = state.session.currentUser.username;
    image_url = state.session.currentUser.image_url;
  }
  return ({

      username: username,
      image_url: image_url
  });
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
