import values from 'lodash/values';

export const selectAllMessages = state => values(state.entities.messages);
