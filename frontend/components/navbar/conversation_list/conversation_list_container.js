import { connect } from 'react-redux';
import ConversationList from './conversation_list';

import { selectAllConversations } from 'reducers/selectors';

import { fetchConversations } from 'actions/conversation_list_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  conversations: selectAllConversations(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchConversations: () => dispatch(fetchConversations())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList));
