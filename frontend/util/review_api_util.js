export const fetchReviews = (host_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: {host_id: host_id}
  });
};

export const createRequest = (review) => {
  console.log(review);

  return $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: {review}
  });
};
