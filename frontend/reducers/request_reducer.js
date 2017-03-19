import { RECEIVE_REQUEST, RECEIVE_REQUEST_ERRORS } from '../actions/requests_actions';
import merge from 'lodash/merge';

const RequestReducer = (state = {request: {}, errors: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_REQUEST:
      return action.request;
    case RECEIVE_REQUEST_ERRORS:
      const errors = action.errors.responseJSON;
      return merge({}, newState, {
        errors
      });
    default:
      return state;
  }
};

export default RequestReducer;
