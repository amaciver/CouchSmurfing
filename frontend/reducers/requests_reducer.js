import { RECEIVE_REQUESTS } from '../actions/requests_actions';
import merge from 'lodash/merge';

const RequestsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_REQUESTS:
      return action.requests;
    default:
      return state;
  }
};

export default RequestsReducer;
