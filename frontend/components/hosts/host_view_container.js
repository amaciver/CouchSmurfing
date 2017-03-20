import React from 'react';
import { connect } from 'react-redux';
import HostView from './host_view';
import {fetchReviews} from '../../actions/reviews_actions';

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
  fetchReviews: (id) => dispatch(fetchReviews(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HostView);
