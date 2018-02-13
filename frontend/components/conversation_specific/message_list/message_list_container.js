import { connect } from 'react-redux';
import MessageList from './message_list';

import { selectAllMessages } from 'reducers/selectors';
import { fetchConversationDetails, receiveCurrentConversationId } from 'actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  conversationId: ownProps.match.params.id,
  // members: state.entities.members,
  // messages: selectAllMessages(state),
  messages: state.entities.messages,
  currentUserId: state.session.currentUser.userId
});

const mapDispatchToProps = (dispatch) => ({
  fetchConversationDetails: (conversationId) => dispatch(fetchConversationDetails(conversationId)),
  receiveCurrentConversationId: (id) => dispatch(receiveCurrentConversationId(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
