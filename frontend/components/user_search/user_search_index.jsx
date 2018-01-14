import React from 'react';

export default ({searchItems, firstTime, searchVal, clearState, receiveUserSelection, selectUserSearchInput}) => {
  if (searchVal === "") return (<ul className="UserSearchIndex"></ul>);

  let listItems;

  if (searchItems.length !== 0) {
    listItems =
      searchItems.map(
        (user) => (
          <li key={user.id}>
            <button className="user-search-button" onClick={
              ()=>{
                receiveUserSelection(user);
                clearState();
                selectUserSearchInput();
              }
            }>
              {user.display_name}
            </button>
          </li>
        )
      );
  } else if (firstTime === false){
    listItems =
      <li>No results found</li>;
  }


  return(
    <ul className="user-search-list">
      {listItems}
    </ul>
  );
};
