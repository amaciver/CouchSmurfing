import { RECEIVE_CITY, CLEAR_CITY } from '../actions/cities_actions';
import merge from 'lodash/merge';

const CityReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CITY:
      return action.city;
    case CLEAR_CITY:
      return action.city;
    default:
      return state;
  }
};

export default CityReducer;
