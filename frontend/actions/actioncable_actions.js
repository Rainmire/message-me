import { receiveMessage, fetchConversationDetails } from './conversation_actions';
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
    channel: 'ChatChannel',
    channel_name: channelName
  }, {
    connected: () => {console.log(`connected to: ${channelName}`);},
    disconnected: () => {},
    received: (data) => {
      if (data.message.message_type === "update") {
        // debugger;
        dispatch(fetchConversationDetails(data.message.conversation));
      }
      else {
        dispatch(receiveMessage(data.message));
        dispatch(fetchConversations());
      }
    }
  });
};
