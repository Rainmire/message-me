import { connect } from 'react-redux';
import MessageList from './message_list';

import { selectAllMessages } from 'reducers/selectors';
// import { setSocket } from 'actions/actioncable_actions';

import { fetchConversationDetails, receiveCurrentConversationId } from 'actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  conversation_id: ownProps.match.params.id,
  members: state.entities.members,
  messages: selectAllMessages(state),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  // setSocket: (channelName) => dispatch(setSocket(channelName)),
  fetchConversationDetails: (conversationId) => dispatch(fetchConversationDetails(conversationId)),
  receiveCurrentConversationId: (id) => dispatch(receiveCurrentConversationId(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
