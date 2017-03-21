export const fetchReviews = (host_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: {host_id: host_id}
  });
};

export const createReview = (review) => {

  return $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: {review}
  });
};

export const deleteReview = (id) => {

  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
  });
};
