import { connect } from 'react-redux';
import UserSearch from './user_search';
import {withRouter} from 'react-router-dom';

import { searchDatabase, receiveUserSelection } from '../../actions/user_actions.js';
import { selectAllUserSearchResults, selectAllUserSelections } from '../../reducers/selectors';

import { addMembers } from '../../actions/conversation_actions';

const mapStateToProps = (state) => ({
  userSearchResults: selectAllUserSearchResults(state),
  userSelections: state.entities.userSelections
});

const mapDispatchToProps = (dispatch, {match}) => ({
  searchDatabase: (query) => dispatch(searchDatabase(query)),
  receiveUserSelection: (user) => dispatch(receiveUserSelection(user)),
  addMembers: (users) => dispatch(addMembers(users, match.params.id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch));
