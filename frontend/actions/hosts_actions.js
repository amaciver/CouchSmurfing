import * as APIUtil from '../util/host_api_util'

export const RECEIVE_HOSTS = "RECEIVE_HOSTS";
export const RECEIVE_HOST = "RECEIVE_HOST";
export const CLEAR_HOSTS = "CLEAR_HOSTS";

export const receiveHosts = hosts => ({
  type: RECEIVE_HOSTS,
  hosts
});

export const receiveHost = host => ({
  type: RECEIVE_HOST,
  host
});

export const clearHosts = (hosts) => ({
  type: CLEAR_HOSTS,
  hosts
})

export const fetchHosts = (city_id) => dispatch => (
  APIUtil.fetchHosts(city_id)
    .then(hosts => dispatch(receiveHosts(hosts)))
);

export const fetchHost = id => dispatch => {
  return (
    APIUtil.fetchHost(id)
      .then(host => dispatch(receiveHost(host)))
  );
}
