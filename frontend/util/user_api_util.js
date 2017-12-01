export const searchUserDatabase = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {search: { query } }
  })
);
