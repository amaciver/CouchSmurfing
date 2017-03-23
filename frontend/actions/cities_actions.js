import * as APIUtil from '../util/city_api_util'

export const RECEIVE_CITIES = "RECEIVE_CITIES";
export const RECEIVE_CITY = "RECEIVE_CITY";
export const CLEAR_CITY = "CLEAR_CITY";

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

export const fetchCities = () => dispatch => (
  APIUtil.fetchCities()
    .then(cities => dispatch(receiveCities(cities)))
);

export const fetchCity = id => dispatch => {
  return (
    APIUtil.fetchCity(id)
      .then(city => dispatch(receiveCity(city)))
  );
}
