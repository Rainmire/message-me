import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MessageList from './message_list';

import { fetchMessages } from '../../actions/conversation_actions';
import { selectAllMessages } from '../../reducers/selectors';

import { setSocket } from '../../actions/actioncable_actions';


const mapStateToProps = (state) => ({
  messages: selectAllMessages(state)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchMessages: () => dispatch(fetchMessages()),
  setSocket: (channelName) => dispatch(setSocket(channelName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);
