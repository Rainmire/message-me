import { connect } from 'react-redux';
import UploadButton from './upload_button';
import { updateProfilePic } from 'actions/user_actions';
import { fetchConversations } from 'actions/conversation_list_actions';
// import { fetchConversationDetails } from 'actions/conversation_actions';
// import {withRouter} from 'react-router-dom';
import { receiveCurrentUser } from 'actions/session_actions';

const mapDispatchToProps = (dispatch, {match}) => ({
  updateProfilePic: (url) => dispatch(updateProfilePic(url)),
  refreshConversations: (currentUser) => {
    dispatch(fetchConversations());
    dispatch(receiveCurrentUser(currentUser));
    // dispatch(fetchConversationDetails(match.params.id));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(UploadButton);
