import { updateMembers } from 'actions/conversation_actions';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveNotification = notification => ({
  type: RECEIVE_NOTIFICATION,
  notification
});

export const parseMessage = message => (dispatch, getState) => {
  let currentConvo = getState().entities.currentConversationId;
  let messageConvo = message.conversationId;


  if (message.messageType !== "update") {
    dispatch(receiveNotification(message));
    if (currentConvo === messageConvo) {
      dispatch(receiveMessage(message));
    }
  }
  else {
    if (currentConvo === messageConvo) {
      dispatch(updateMembers(message.members));
    }
  }

  

};
