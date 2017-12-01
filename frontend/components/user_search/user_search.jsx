import React from 'react';
import UserSearchIndex from './user_search_index';
// import onClickOutside from 'react-onclickoutside';

class UserSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchVal: '', firstTime: true };
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
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

  handleClickOutside() {
    this.clearState();
  }

  render(){
    return (
      <div className="UserSearch">
        <input className="UserSearchInput" onChange={this.handleChange} type="text"
          placeholder="Search for user..."
          value={this.state.searchVal}
        />
      <UserSearchIndex className="user-search-list" firstTime={this.state.firstTime}
          searchItems={this.props.userSearchResults}
          searchVal={this.state.searchVal}
          clearState={this.clearState}
        />
      </div>
    );
  }
}

// export default onClickOutside(UserSearch);
export default UserSearch;
