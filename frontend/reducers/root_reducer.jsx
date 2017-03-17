import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';
import CityReducer from './city_reducer';
import HostsReducer from './hosts_reducer';
import HostReducer from './host_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  cities: CitiesReducer,
  currentCity: CityReducer,
  hosts: HostsReducer,
  currentHost: HostReducer
});

export default rootReducer;
