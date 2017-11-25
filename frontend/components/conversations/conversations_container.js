import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Conversations from './conversations';

import { fetchMessages, createMessage } from '../../actions/conversation_actions';
import { selectAllMessages } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  messages: selectAllMessages(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchMessages: () => dispatch(fetchMessages()),
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations);
