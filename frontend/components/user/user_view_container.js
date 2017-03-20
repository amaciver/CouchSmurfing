import React from 'react';
import { connect } from 'react-redux';
import UserView from './user_view';
import { fetchRequests } from '../../actions/requests_actions';

const mapStateToProps = (state) => {
  const requests = Object.keys(state.requests).map(id => state.requests[id]);
  console.log(requests);
  return ({
    user: state.session.currentUser,
    requests: requests
  });
}
const mapDispatchToProps = dispatch => ({
  fetchRequests: userId => dispatch(fetchRequests(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
