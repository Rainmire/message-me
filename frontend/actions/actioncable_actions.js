import { fetchConversationDetails } from './conversation_actions';
import { fetchConversations } from './conversation_list_actions';
import { parseMessage } from './message_actions';

export const setSocket = () => (dispatch) => {

  // debugger;

  window.App.channel = window.App.cable.subscriptions.create({
    channel: 'ChatChannel'
  }, {
    connected: () => {console.log(`connected to ChatChannel`);},
    disconnected: () => {console.log(`disconnected from ChatChannel`);},
    received: (data) => {
      // if (data.message.message_type === "update") {
      //   // debugger;
      //   dispatch(fetchConversationDetails(data.message.conversation));
      // }
      // else {
      //   dispatch(receiveMessage(data.message));
      //   dispatch(fetchConversations());
      // }

      // let currentConvo = getState().entities.currentConversationId;
      // console.log("currentConvo: "+currentConvo);
      // let messageConvo = data.message.conversation_id
      // console.log("messageConvo: "+messageConvo);

      // if (currentConvo === messageConvo) {

      // }

      dispatch(parseMessage(data.message));
    }
  });
};