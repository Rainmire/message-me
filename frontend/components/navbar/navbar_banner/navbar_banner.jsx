import React from 'react';
import UserSettings from './user_settings';
import CreateConversationButton from './create_conversation_button';

class NavbarBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickGear: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown () {
    let clickState = this.state.clickGear ? false : true;
    this.setState({
      clickGear: clickState
    });
  }

  dropdown() {
    if (this.state.clickGear) {
      return <UserSettings/>;
    }
  }

  render () {

    return (
      <div className="navbar-banner">
        <i className="fa fa-cog" aria-hidden="true">
          <button onClick={this.toggleDropdown}/>
        </i>
        {this.dropdown()}
        <CreateConversationButton />
      </div>
    );
  }
}

export default NavbarBanner;

// <NewConversationContainer />
