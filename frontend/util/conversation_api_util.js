export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: {message}
  })
);

export const fetchMessages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
);
