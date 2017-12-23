import { connect } from 'react-redux';
import ConversationList from './conversation_list';

import { selectAllConversations } from 'reducers/selectors';

import { fetchConversations } from 'actions/conversation_list_actions';
import { logout } from 'actions/session_actions';

const mapStateToProps = (state) => ({
  conversations: selectAllConversations(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchConversations: () => dispatch(fetchConversations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);
