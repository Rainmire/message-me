import { connect } from 'react-redux';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    demoSignup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors(null))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
