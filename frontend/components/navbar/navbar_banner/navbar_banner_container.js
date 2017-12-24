import { connect } from 'react-redux';
import NavbarBanner from './navbar_banner';
import { logout } from 'actions/session_actions';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps
)(NavbarBanner);
