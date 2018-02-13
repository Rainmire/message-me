import values from 'lodash/values';

// export const selectAllMessages = state => values(state.entities.messages);

// export const selectAllMembers = state => values(state.entities.members);

export const selectAllUserSearchResults = state => values(state.entities.userSearchResults);

// export const selectConversationIndexById = (id, state) => {
//   for(let i = 0; i < state.length; i++) {
//     if (state[i].id === id) {
//       return i;
//     }
//   }
//   return -1;
// }