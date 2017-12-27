import { connect } from 'react-redux';
import UploadButton from './upload_button';
import { updateProfilePic } from 'actions/user_actions';

const mapDispatchToProps = (dispatch) => ({
  updateProfilePic: (url) => dispatch(updateProfilePic(url))
});

export default connect(
  null,
  mapDispatchToProps
)(UploadButton);
