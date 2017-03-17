export const fetchCities = (query_string) => {
  return $.ajax({
    method: 'GET',
    url: '/api/cities',
    data: {query_string}
  });
};

export const fetchCity = (id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {id}
  });
};
