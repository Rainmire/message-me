export const createMessage = (message, conversationId) => (
  $.ajax({
    method: 'POST',
    url: `/api/conversations/${conversationId}/messages`,
    data: {message}
  })
);

export const fetchConversationDetails = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/conversations/${id}`
  })
);

export const createConversation = (users) => (
  $.ajax({
    method: 'POST',
    url: `/api/conversations`,
    data: {users}
  })
);


export const addMembers = (userIds, convoId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/conversations/${convoId}`,
    data: JSON.stringify({userIds}),
    dataType: "json", 
    contentType: 'application/json'
  })
);
