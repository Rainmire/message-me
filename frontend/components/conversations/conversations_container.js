import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Conversations from './conversations';

// const mapStateToProps = (state) => ({
//   loggedIn: Boolean(state.session.currentUser),
//   errors: state.errors.session
// });

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Conversations);
