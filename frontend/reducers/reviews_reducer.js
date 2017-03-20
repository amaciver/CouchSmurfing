import { RECEIVE_REVIEWS } from '../actions/reviews_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};

export default ReviewsReducer;
