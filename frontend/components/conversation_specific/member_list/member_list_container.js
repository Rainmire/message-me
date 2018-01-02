import { connect } from 'react-redux';
import MembersList from './member_list';
import {withRouter} from 'react-router-dom';

import { selectAllMembers } from 'reducers/selectors';
import { addMembers } from 'actions/conversation_actions';

const mapStateToProps = (state) => ({
  members: selectAllMembers(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, {match}) => ({
  addMembers: (users) => dispatch(addMembers(users, match.params.id)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersList));
