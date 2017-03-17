import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  currentCity: CityReducer
});

export default rootReducer;
