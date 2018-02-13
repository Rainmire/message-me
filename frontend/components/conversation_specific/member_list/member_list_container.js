import { connect } from 'react-redux';
import MembersList from './member_list';
import {withRouter} from 'react-router-dom';

// import { selectAllMembers } from 'reducers/selectors';
import { addMembers } from 'actions/conversation_actions';

const mapStateToProps = (state) => ({
  // members: selectAllMembers(state),
  members: state.entities.members,
  currentUser: state.session.currentUser,
  loading: state.loading.detailLoading
});

const mapDispatchToProps = (dispatch, {match}) => ({
  addMembers: (users) => dispatch(addMembers(users, match.params.id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersList));
