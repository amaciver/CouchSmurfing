import React from 'react';
import { connect } from 'react-redux';
import RequestForm from './request_form';
import { createRequest } from '../../actions/requests_actions';

const mapStateToProps = state => ({
  user: state.session.currentUser,
  host: state.currentHost,
  request: state.currentRequest.request,
  errors: state.currentRequest.errors
});

const mapDispatchToProps = dispatch => ({
  createRequest: request => dispatch(createRequest(request))

});

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm);
