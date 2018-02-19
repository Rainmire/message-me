import { receiveNewConversation } from './conversation_list_actions';
import { parseMessage } from './message_actions';

export const setSocket = () => (dispatch) => {
  addChatSocket(dispatch);
  addNotificationSocket(dispatch);
};

const addChatSocket = (dispatch) => {
  App.chatChannel = App.cable.subscriptions.create({
    channel: 'ChatChannel'
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      // debugger;
      dispatch(parseMessage(data.message));
    },
    resetChatSocket: () => {
      console.log("PERFORMING RESET");
      App.chatChannel.perform("reset_streams");
    },
    // addStream: (id) => {
      // debugger;
    //   App.chatChannel.perform("add_stream", {"id": id});
    // }
  });
}

const addNotificationSocket = (dispatch) => {
  App.cable.subscriptions.create({
    channel: 'WebNotificationsChannel'
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      dispatch(receiveNewConversation(data.content));
      // resetChatSocket(dispatch);
      // setTimeout(App.chatChannel.resetChatSocket, 10000);
      App.chatChannel.resetChatSocket();
      // debugger;
      // App.chatChannel.addStream(data.content[0].conversationId);
    }
  });
}

// const resetChatSocket = (dispatch) => {
//   debugger;
//   if (App.chatChannel) {
//     App.cable.subscriptions.remove(App.chatChannel);
//   }
//   addChatSocket(dispatch);
// };