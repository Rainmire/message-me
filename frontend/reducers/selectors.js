import values from 'lodash/values';

export const selectAllMessages = state => values(state.entities.messages);

// export const selectAllConversations = state => values(state.entities.conversations);

export const selectAllConversations = state => {
  const conversations = state.entities.conversations;
  return Object.keys(conversations).map(id=>({id,title:conversations[id].title}));
};

export const selectAllMembers = state => values(state.entities.members);

export const selectAllUserSearchResults = state => values(state.entities.userSearchResults);
// export const selectAllUserSelections = state => values(state.entities.userSelections);
