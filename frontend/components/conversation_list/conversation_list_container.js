import { connect } from 'react-redux';
import ConversationList from './conversation_list';

// import { fetchMessages, createMessage } from '../../actions/conversation_actions';
import { selectAllConversations } from '../../reducers/selectors';

import { fetchConversations } from '../../actions/conversation_list_actions';

// import { setSocket } from '../../actions/actioncable_actions';


const mapStateToProps = (state) => ({
  conversations: selectAllConversations(state)
});

const mapDispatchToProps = (dispatch) => ({
  // logout: () => dispatch(logout()),
  // fetchMessages: () => dispatch(fetchMessages()),
  // createMessage: (message) => dispatch(createMessage(message)),
  fetchConversations: () => dispatch(fetchConversations())
  // setSocket: (channelName) => dispatch(setSocket(channelName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);
