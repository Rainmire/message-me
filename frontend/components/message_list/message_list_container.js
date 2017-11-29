import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MessageList from './message_list';

import { fetchMessages } from '../../actions/conversation_actions';
import { selectAllMessages } from '../../reducers/selectors';
import { fetchMembers } from '../../actions/conversation_actions';

import { setSocket } from '../../actions/actioncable_actions';

import { fetchConversation } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  conversation_id: ownProps.match.params.id,
  members: state.entities.members,
  messages: selectAllMessages(state),
  currentUserId: state.session.currentUser.id
});

// const mapStateToProps = (state, ownProps) => {
//   debugger;
//   return {
//   members: state.entities.members,
//   messages: selectAllMessages(state),
//   currentUserId: state.session.currentUser.id
// };
// };

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchMessages: () => dispatch(fetchMessages()),
  setSocket: (channelName) => dispatch(setSocket(channelName)),
  // fetchMembers: (conversationId) => dispatch(fetchMembers(conversationId)),
  fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
