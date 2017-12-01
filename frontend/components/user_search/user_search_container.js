import { connect } from 'react-redux';
import UserSearch from './user_search';

import { searchDatabase, receiveUserSelection } from '../../actions/user_actions.js';
import { selectAllUserSearchResults, selectAllUserSelections } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  userSearchResults: selectAllUserSearchResults(state),
  userSelections: selectAllUserSelections(state)
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query)),
  receiveUserSelection: (user) => dispatch(receiveUserSelection(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
