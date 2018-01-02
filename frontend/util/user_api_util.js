export const searchUserDatabase = (query) => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {search: { query } }
  })
);

export const updateProfilePic = (url) => (
  $.ajax({
    method: 'PATCH',
    url: 'api/users/update',
    data: {url}
  })
);
