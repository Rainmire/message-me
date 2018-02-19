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
      dispatch(parseMessage(data.message));
    },
    resetChatSocket: () => {
      console.log("PERFORMING RESET");
      App.chatChannel.perform("reset_streams");
    }
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
      
      App.chatChannel.resetChatSocket(); 
    }
  });
}