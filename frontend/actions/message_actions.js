export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// import { receiveMessage } from 'actions/conversation_actions';

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

// const receiveMessage = message => {
//   debugger;
//   return {
//     type: RECEIVE_MESSAGE,
//     message
//   };
// };


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
