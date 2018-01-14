import React from 'react';
import UserSearchIndex from './user_search_index';
import values from 'lodash/values';
// import { selectAllUserSelections } from '../../reducers/selectors';

// import onClickOutside from 'react-onclickoutside';

//state.entities.userSelections
//dispatch(receiveUserSelection)

class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: '', firstTime: true };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectUserSearchInput = this.selectUserSearchInput.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    const newVal = e.target.value;
    this.setState({ searchVal: newVal, firstTime: false }, () => {
      this.props.searchDatabase(this.state.searchVal);
    });
  }

  clearState() {
    this.setState({ searchVal: '', firstTime: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const users = this.props.userSelections;
    this.props.clearUserSelections();
    
    if (Object.keys(users).length > 0) {
      this.props.userSearchAction(users);
      this.clearState();
    }
  }

  selectUserSearchInput() {
    this.userSearchInput.focus();
  }

  render() {
    const { userSelections } = this.props;
    const userSelectionsArr = values(userSelections);
    return (
      <div className="user-search">
        <div className="search-bar">
          <form className="user-search-form" onSubmit={this.handleSubmit}>
            <input className="user-search-input"
              onChange={this.handleChange}
              type="text"
              placeholder="Search for user..."
              value={this.state.searchVal}
              ref={el => { this.userSearchInput = el; }}
            />
          </form>
          <ul className="selected-users">
            {userSelectionsArr.map((user) => (
              <div key={user.id} id="selected-user-item">

                  {user.display_name}

              </div>
              )
            )}
          </ul>

        </div>

        <UserSearchIndex className="user-search-index"
          firstTime={this.state.firstTime}
          searchItems={this.props.userSearchResults}
          searchVal={this.state.searchVal}
          clearState={this.clearState}
          receiveUserSelection={this.props.receiveUserSelection}
          selectUserSearchInput={this.selectUserSearchInput}
        />
      </div>
    );
  }
  componentWillUnmount() {
    this.props.clearUserSelections();
  }
}

// export default onClickOutside(UserSearch);
export default UserSearch;
