import { RECEIVE_CITIES } from '../actions/cities_actions';
import merge from 'lodash/merge';

const CitiesReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CITIES:
      return action.cities;
    default:
      return state;
  }
};

export default CitiesReducer;
