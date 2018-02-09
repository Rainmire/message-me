export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});


export const parseMessage = message => (dispatch, getState) => {
  let currentConvo = getState().entities.currentConversationId;
  let messageConvo = message.conversation_id.toString();

  if (message.message_type === "update") {
    if (currentConvo === messageConvo) {
      //dispatch update member
    }
  }
  else {
    if (currentConvo === messageConvo) {
      dispatch(receiveMessage(message));
    }
    else {
      //dispatch notification
    }
  }

};
