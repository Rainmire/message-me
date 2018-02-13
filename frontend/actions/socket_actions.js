import { fetchConversationDetails } from './conversation_actions';
import { fetchConversations } from './conversation_list_actions';
import { parseMessage } from './message_actions';

export const setSocket = () => (dispatch) => {
  return window.App.channel = window.App.cable.subscriptions.create({
    channel: 'ChatChannel'
  }, {
    connected: () => {console.log(`connected to ChatChannel`);},
    disconnected: () => {console.log(`disconnected from ChatChannel`);},
    received: (data) => {
      
      dispatch(parseMessage(data.message));
    }
  });
};