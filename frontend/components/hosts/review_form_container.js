import React from 'react';
import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, fetchReviews } from '../../actions/reviews_actions';

const mapStateToProps = state => ({
  user: state.session.currentUser,
  host: state.currentHost
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  fetchReviews: (id) => dispatch(fetchReviews(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
