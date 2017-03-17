import { RECEIVE_HOST } from '../actions/hosts_actions';
import merge from 'lodash/merge';

const HostReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_HOST:
      return action.host;
    default:
      return state;
  }
};

export default HostReducer;
