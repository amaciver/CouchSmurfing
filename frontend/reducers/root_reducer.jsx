import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';
import CityReducer from './city_reducer';
import HostsReducer from './hosts_reducer';
import HostReducer from './host_reducer';
import RequestsReducer from './requests_reducer';
import RequestReducer from './request_reducer';
import ReviewsReducer from './reviews_reducer';
import LoadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  loading: LoadingReducer,
  cities: CitiesReducer,
  currentCity: CityReducer,
  hosts: HostsReducer,
  currentHost: HostReducer,
  requests: RequestsReducer,
  currentRequest: RequestReducer,
  reviews: ReviewsReducer
});

export default rootReducer;
