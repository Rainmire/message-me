export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {user}
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user}
  })
);

export const demoSignup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users/create_guest',
    data: user
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
