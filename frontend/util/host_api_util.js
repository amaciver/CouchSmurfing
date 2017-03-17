export const fetchHosts = (city_id) => {
  // debugger;
  return $.ajax({
    method: 'GET',
    url: '/api/hosts',
    data: {city_id: city_id}
  });
};

export const fetchHost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/hosts/${id}`,
  });
};
