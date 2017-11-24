import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Conversations from './conversations';

import { fetchMessages } from '../../actions/conversation_actions';

// const mapStateToProps = (state) => ({
//   loggedIn: Boolean(state.session.currentUser),
//   errors: state.errors.session
// });

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchMessages: () => dispatch(fetchMessages())
});

export default connect(
  null,
  mapDispatchToProps
)(Conversations);
