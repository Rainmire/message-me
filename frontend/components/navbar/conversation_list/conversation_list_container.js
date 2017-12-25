import { connect } from 'react-redux';
import ConversationList from './conversation_list';

import { fetchConversations } from 'actions/conversation_list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  conversations: state.entities.conversations
});

const mapDispatchToProps = (dispatch) => ({
  fetchConversations: () => dispatch(fetchConversations())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList));
