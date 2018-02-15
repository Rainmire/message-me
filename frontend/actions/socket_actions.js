import { fetchConversationDetails } from './conversation_actions';
import { fetchConversations } from './conversation_list_actions';
import { parseMessage } from './message_actions';

export const setSocket = () => (dispatch) => {
  if (App.channel) {
    App.cable.subscriptions.remove(App.channel);
  }

  App.channel = App.cable.subscriptions.create({
    channel: 'ChatChannel'
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      dispatch(parseMessage(data.message));
    }
  });
};