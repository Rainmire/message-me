import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Conversations from './conversations';

import { fetchMessages } from '../../actions/conversation_actions';
import { selectAllMessages } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  messages: selectAllMessages(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchMessages: () => dispatch(fetchMessages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);
