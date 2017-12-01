import { connect } from 'react-redux';
import UserSearch from './user_search';

import { searchDatabase } from '../../actions/user_actions.js';
import { selectAllUserSearchResults } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  userSearchResults: selectAllUserSearchResults(state)
});

const mapDispatchToProps = (dispatch) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
