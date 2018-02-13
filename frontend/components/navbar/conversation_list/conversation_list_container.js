import { connect } from 'react-redux';
import ConversationList from './conversation_list';

import { fetchConversations } from 'actions/conversation_list_actions';
import { setSocket } from 'actions/actioncable_actions';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  conversations: state.entities.conversations,
  loading: state.loading.indexLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchConversations: () => dispatch(fetchConversations()),
  setSocket: () => dispatch(setSocket()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList));
