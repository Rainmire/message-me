export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: {message}
  })
);

export const fetchMessages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/messages'
  })
);

export const fetchMembers = (conversationId) => (
  $.ajax({
    method: 'GET',
    url: `/api/conversations/${conversationId}/members`
  })
);
