import { RECEIVE_CITY } from '../actions/cities_actions';
import merge from 'lodash/merge';

const CityReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CITY:
      return action.city;
    default:
      return state;
  }
};

export default CityReducer;
