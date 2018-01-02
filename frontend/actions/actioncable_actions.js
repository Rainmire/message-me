import { receiveMessage } from './conversation_actions';
import { fetchConversations } from './conversation_list_actions';

export const setSocket = channelName => dispatch => {
  if (window.App.channel) {
    removeSocket();
  }
  addSocket(channelName, dispatch);
};

const removeSocket = () => (
  window.App.cable.subscriptions.remove(window.App.channel)
);

const addSocket = (channelName, dispatch) => {
  window.App.channel = window.App.cable.subscriptions.create({
    channel: 'ChannelChannel',
    channel_name: channelName
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      dispatch(receiveMessage(data.message));
      dispatch(fetchConversations());
    }
  });
};
