import { connect } from 'react-redux';
import { createMessage } from '../../actions/conversation_actions';
import MessageInputForm from './message_input_form';
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = (dispatch, {match}) => {
  const conversationId = match.params.id;
  return {
  createMessage: (message) => dispatch(createMessage(message, conversationId)),
};};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(MessageInputForm));
