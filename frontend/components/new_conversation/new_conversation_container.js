import { connect } from 'react-redux';
import { createConversation } from 'actions/conversation_actions';
import { fetchConversations } from 'actions/conversation_list_actions';
import NewConversation from './new_conversation';

const mapDispatchToProps = (dispatch) => ({
  createConversation: (users) => dispatch(createConversation(users)),
  fetchConversations: () => dispatch(fetchConversations())
});

export default connect(
  null,
  mapDispatchToProps
)(NewConversation);
