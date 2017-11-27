export const fetchConversations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/conversations'
  })
);
