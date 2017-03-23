import * as APIUtil from '../util/request_api_util'

export const RECEIVE_REQUESTS = "RECEIVE_REQUESTS";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const RECEIVE_REQUEST_ERRORS = "RECEIVE_REQUEST_ERRORS";
export const CLEAR_REQUEST_ERRORS = "CLEAR_REQUEST_ERRORS";

export const receiveRequests = requests => ({
  type: RECEIVE_REQUESTS,
  requests
});

export const receiveRequest = request => ({
  type: RECEIVE_REQUEST,
  request
});

export const receiveRequestErrors = errors => ({
  type: RECEIVE_REQUEST_ERRORS,
  errors
});

export const clearRequestErrors = () => ({
  type: CLEAR_REQUEST_ERRORS
})

export const createRequest = (request) => dispatch => (
  APIUtil.createRequest(request)
    .then(request => dispatch(receiveRequest(request)))
    .fail(errors => dispatch(receiveRequestErrors(errors)))
);

export const fetchRequests = (userId) => dispatch => (
  APIUtil.fetchRequests(userId)
    .then(requests => dispatch(receiveRequests(requests)))
);

export const fetchRequest = id => dispatch => (
  APIUtil.fetchRequest(id)
    .then(request => dispatch(receiveRequest(request)))
);
