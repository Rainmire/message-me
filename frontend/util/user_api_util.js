export const searchUserDatabase = (query) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {search: { query } }
  });
};
