import { connect } from 'react-redux';
import { createMessage } from '../../actions/conversation_actions';
import MessageInputForm from './message_input_form';

const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMessage(message)),
});

export default connect(
  null,
  mapDispatchToProps
)(MessageInputForm);
