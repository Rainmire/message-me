import { connect } from 'react-redux';
import MessageList from './message_list';
import { fetchConversationDetails, receiveCurrentConversationId } from 'actions/conversation_actions';

const mapStateToProps = (state, ownProps) => ({
  conversationId: ownProps.match.params.id,
  messages: state.entities.messages,
  currentUserId: state.session.currentUser.userId,
  loading: state.loading.detailLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchConversationDetails: (conversationId) => dispatch(fetchConversationDetails(conversationId)),
  receiveCurrentConversationId: (id) => dispatch(receiveCurrentConversationId(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
