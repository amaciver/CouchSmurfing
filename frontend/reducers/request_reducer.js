import { RECEIVE_REQUEST,
        RECEIVE_REQUEST_ERRORS,
        CLEAR_REQUEST_ERRORS } from '../actions/requests_actions';

import merge from 'lodash/merge';

const RequestReducer = (state = {request: {}, errors: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_REQUEST:
      return action.request;
    case RECEIVE_REQUEST_ERRORS:
      let errors = action.errors.responseJSON;
      return merge({}, newState, {
        errors
      });
    case CLEAR_REQUEST_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default RequestReducer;
