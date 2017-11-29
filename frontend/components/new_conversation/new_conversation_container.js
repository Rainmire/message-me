import { connect } from 'react-redux';
import { createConversation } from '../../actions/conversation_actions';
import NewConversation from './new_conversation';

const mapDispatchToProps = (dispatch) => ({
  createConversation: (formConversation) => dispatch(createConversation(formConversation))
});

export default connect(
  null,
  mapDispatchToProps
)(NewConversation);
