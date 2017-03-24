import * as APIUtil from '../util/city_api_util'

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_CITY = "RECEIVE_CITY";
export const CLEAR_CITY = "CLEAR_CITY";
export const START_LOADING_CITY = "START_LOADING_CITY";
export const START_LOADING_CITIES = "START_LOADING_CITIES";


export const receiveCities = cities => ({
  type: RECEIVE_CITIES,
  cities
});

export const receiveCity = city => ({
  type: RECEIVE_CITY,
  city
});

export const clearCity = city => ({
  type: CLEAR_CITY,
  city
})

export const startLoadingCity = () => ({
	type: START_LOADING_CITY
});

export const startLoadingCities = () => ({
	type: START_LOADING_CITIES
});

export const fetchCities = () => dispatch => {
  dispatch(startLoadingCities());
  return (
    APIUtil.fetchCities()
    .then(cities => dispatch(receiveCities(cities)))
  );
}

export const fetchCity = id => dispatch => {
  dispatch(startLoadingCity());
  return (
    APIUtil.fetchCity(id)
      .then(city => dispatch(receiveCity(city)))
  );
}
