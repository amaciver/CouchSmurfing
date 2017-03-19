export const fetchRequests = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/requests',
    data: {user_id: user_id}
  });
};

export const createRequest = (request) => {
  return $.ajax({
    method: 'POST',
    url: '/api/requests',
    data: {request}
  });
};
