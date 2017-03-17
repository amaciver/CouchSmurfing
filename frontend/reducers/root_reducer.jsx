import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';
import CityReducer from './city_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  currentCity: CityReducer
});

export default rootReducer;
