import React from 'react';
import { connect } from 'react-redux';
import RequestForm from './request_form';

const mapStateToProps = state => ({
  user: state.session.currentUser,
  host: state.currentHost
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
