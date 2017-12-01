import { connect } from 'react-redux';
import MessageList from './message_list';

import { fetchMessages } from '../../actions/conversation_actions';
import { selectAllMessages } from '../../reducers/selectors';
import { fetchMembers } from '../../actions/conversation_actions';

import { setSocket } from '../../actions/actioncable_actions';

import { fetchConversationDetails } from '../../actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  conversation_id: ownProps.match.params.id,
  members: state.entities.members,
  messages: selectAllMessages(state),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  setSocket: (channelName) => dispatch(setSocket(channelName)),
  fetchConversationDetails: (conversationId) => dispatch(fetchConversationDetails(conversationId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
