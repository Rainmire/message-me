import { connect } from 'react-redux';
import MembersList from './member_list';

import { selectAllMembers } from 'reducers/selectors';

const mapStateToProps = (state) => ({
  members: selectAllMembers(state)
});

export default connect(
  mapStateToProps,
  null
)(MembersList);
