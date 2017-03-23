import { RECEIVE_HOSTS, CLEAR_HOSTS } from '../actions/hosts_actions';
import merge from 'lodash/merge';

const HostsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_HOSTS:
      return action.hosts;
    case CLEAR_HOSTS:
      return action.hosts;
    default:
      return state;
  }
};

export default HostsReducer;
