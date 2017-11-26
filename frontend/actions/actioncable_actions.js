import { receiveMessage } from './conversation_actions';

export const setSocket = channelName => dispatch => {
  if (window.App.channel) {
    return;
    // removeSocket();
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
    connected: () => {console.log("connected!");},
    disconnected: () => {console.log("disconnected!");},
    received: (data) => {
      dispatch(receiveMessage(data.message));
    }
  });
};
