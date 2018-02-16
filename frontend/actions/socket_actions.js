import { receiveNewConversation } from './conversation_list_actions';
import { parseMessage } from './message_actions';

export const setSocket = () => (dispatch) => {
  addChatSocket(dispatch);
  addNotificationSocket(dispatch);
};

export const resetSocket = () => (dispatch) => {
  if (App.chatChannel) {
    App.cable.subscriptions.remove(App.chatChannel);
  }
  addChatSocket(dispatch);
};

const addChatSocket = (dispatch) => {
  App.chatChannel = App.cable.subscriptions.create({
    channel: 'ChatChannel'
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      dispatch(parseMessage(data.message));
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
      // debugger;
      // console.log("Got notification! "+data.action);
      // dispatch(parseMessage(data.message));
      dispatch(receiveNewConversation(data.content));
    }
  });
}