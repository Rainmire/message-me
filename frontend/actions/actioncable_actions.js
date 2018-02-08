import { receiveMessage, fetchConversationDetails } from './conversation_actions';
import { fetchConversations } from './conversation_list_actions';

// export const setSocket = channelName => (dispatch, getState) => {
//   // if (window.App.channel) {
//   //   removeSocket();
//   // }
//   debugger;
//   addSocket(channelName, dispatch);
// };

// const removeSocket = () => (
//   window.App.cable.subscriptions.remove(window.App.channel)
// );

// const addSocket = (channelName, dispatch) => {
  
//   window.App.channel = window.App.cable.subscriptions.create({
//     channel: 'ChatChannel'
//   }, {
//     connected: () => {console.log(`connected to: ${channelName}`);},
//     disconnected: () => {},
//     received: (data) => {
//       if (data.message.message_type === "update") {
//         // debugger;
//         dispatch(fetchConversationDetails(data.message.conversation));
//       }
//       else {
//         dispatch(receiveMessage(data.message));
//         dispatch(fetchConversations());
//       }
//     }
//   });
// };


export const setSocket = () => (dispatch, getState) => {

  debugger;

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
      console.log(getState());
      debugger;
    }
  });
};