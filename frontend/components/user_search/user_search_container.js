import { connect } from 'react-redux';
import UserSearch from './user_search';
import { searchDatabase, receiveUserSelection, clearUserSelections } from 'actions/user_actions.js';

const mapStateToProps = (state, {userSearchAction}) => ({
  userSearchResults: state.entities.userSearchResults,
  userSelections: state.entities.userSelections,
  userSearchAction
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query)),
  receiveUserSelection: (user) => dispatch(receiveUserSelection(user)),
  clearUserSelections: () => dispatch(clearUserSelections())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
