import values from 'lodash/values';

export const selectAllUserSearchResults = state => values(state.entities.userSearchResults);
