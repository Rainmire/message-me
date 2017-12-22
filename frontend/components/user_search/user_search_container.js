import { connect } from 'react-redux';
import UserSearch from './user_search';
// import {withRouter} from 'react-router-dom';

import { searchDatabase, receiveUserSelection, clearUserSelections } from '../../actions/user_actions.js';
import { selectAllUserSearchResults, selectAllUserSelections } from '../../reducers/selectors';

import { addMembers } from '../../actions/conversation_actions';

const mapStateToProps = (state, {userSearchAction}) => ({
  userSearchResults: selectAllUserSearchResults(state),
  userSelections: state.entities.userSelections,
  userSearchAction
});
// const mapStateToProps = (state, foo) => {
//   console.log(foo);
//   return{
//   userSearchResults: selectAllUserSearchResults(state),
//   userSelections: state.entities.userSelections
//   };
// };
const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query)),
  receiveUserSelection: (user) => dispatch(receiveUserSelection(user)),
  // addMembers: (users) => dispatch(addMembers(users, match.params.id)),
  clearUserSelections: () => dispatch(clearUserSelections())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);

// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UserSearch));
