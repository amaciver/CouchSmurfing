import * as APIUtil from '../util/host_api_util'

export const RECEIVE_HOSTS = "RECEIVE_HOSTS";
export const RECEIVE_HOST = "RECEIVE_HOST";

export const receiveHosts = hosts => ({
  type: RECEIVE_HOSTS,
  hosts
});

export const receiveHost = host => ({
  type: RECEIVE_HOST,
  host
});

export const fetchHosts = (city_id) => dispatch => (
  APIUtil.fetchHosts(city_id)
    .then(hosts => dispatch(receiveHosts(hosts)))
);

export const fetchHost = id => dispatch => (
  APIUtil.fetchHost(id)
    .then(host => dispatch(receiveHost(host)))
);
