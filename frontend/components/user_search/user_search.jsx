import React from 'react';
import UserSearchIndex from './user_search_index';
import values from 'lodash/values';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: '', firstTime: true };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.focusUserSearchInput = this.focusUserSearchInput.bind(this);
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
    
    if (users.length > 0) {
      this.props.userSearchAction(users);
      this.clearState();
      this.props.clearUserSelections();
    }
  }

  focusUserSearchInput() {
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
              <div key={user.userId} id="selected-user-item">
                  {user.displayName}
              </div>
              )
            )}
          </ul>

        </div>

        <UserSearchIndex className="user-search-index"
          firstTime={this.state.firstTime}
          userSearchResults={this.props.userSearchResults}
          searchVal={this.state.searchVal}
          clearState={this.clearState}
          receiveUserSelection={this.props.receiveUserSelection}
          focusUserSearchInput={this.focusUserSearchInput}
        />
      </div>
    );
  }
  componentWillUnmount() {
    this.props.clearUserSelections();
  }
}

export default UserSearch;
