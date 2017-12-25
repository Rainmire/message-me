import values from 'lodash/values';

export const selectAllMessages = state => values(state.entities.messages);

export const selectAllConversations = state => {
  const conversations = state.entities.conversations;
  return Object.keys(conversations).map(id=>(conversations[id]));
};

export const selectAllMembers = state => values(state.entities.members);

export const selectAllUserSearchResults = state => values(state.entities.userSearchResults);
