import React from 'react';
import { connect } from 'react-redux';
import HostView from './host_view';
import {fetchHost} from '../../actions/hosts_actions';
import {fetchReviews} from '../../actions/reviews_actions';
import {clearRequestErrors} from '../../actions/requests_actions';

const mapStateToProps = (state, ownProps) => {
  const reviews = Object.keys(state.reviews).map(id => state.reviews[id]);
  return({
    user: state.session.currentUser,
    host: state.currentHost,
    reviews: reviews
  });
}

const mapDispatchToProps = (dispatch) => ({
  fetchHost: (id) => dispatch(fetchHost(id)),
  fetchReviews: (id) => dispatch(fetchReviews(id)),
  clearRequestErrors: () => dispatch(clearRequestErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(HostView);
