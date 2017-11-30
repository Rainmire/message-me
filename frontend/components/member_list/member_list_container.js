import { connect } from 'react-redux';
import MembersList from './member_list';

// import { fetchMessages, createMessage } from '../../actions/conversation_actions';
import { selectAllMembers } from '../../reducers/selectors';

// import { fetchConversations } from '../../actions/conversation_list_actions';
// import { logout } from '../../actions/session_actions';

// import { setSocket } from '../../actions/actioncable_actions';


const mapStateToProps = (state) => ({
  // conversations: selectAllConversations(state)
  members: selectAllMembers(state)
});

const mapDispatchToProps = (dispatch) => ({
  // logout: () => dispatch(logout()),
  // fetchMessages: () => dispatch(fetchMessages()),
  // createMessage: (message) => dispatch(createMessage(message)),
  // fetchConversations: () => dispatch(fetchConversations())
  // setSocket: (channelName) => dispatch(setSocket(channelName))
  // createConversation: ()=>
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersList);
