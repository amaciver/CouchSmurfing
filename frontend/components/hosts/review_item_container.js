import React from 'react';
import {connect} from 'react-redux';
import { removeReview } from '../../actions/reviews_actions';
import ReviewItem from './review_item';

const mapStateToProps = state => {
  let userId;
  if (state.session.currentUser) {
    userId = state.session.currentUser.id
  }
  return ({
    userId: userId
  });
}

const mapDispatchToProps = dispatch => ({
  removeReview: id => dispatch(removeReview(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem);
