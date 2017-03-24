import { RECEIVE_CITY,
    RECEIVE_CITIES,
    START_LOADING_CITY,
    START_LOADING_CITIES} from '../actions/cities_actions';
    
import { RECEIVE_HOST,
  RECEIVE_HOSTS } from '../actions/hosts_actions';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CITY:
    case RECEIVE_CITIES:
    case RECEIVE_HOST:
    case RECEIVE_HOSTS:
      return initialState;
    case START_LOADING_CITY:
    case START_LOADING_CITIES:
    // case START_LOADING_HOST:
    // case START_LOADING_HOSTS:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};
