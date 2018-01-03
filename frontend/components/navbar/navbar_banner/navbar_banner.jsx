import React from 'react';
import UserSettings from './user_settings';
import CreateConversationButton from './create_conversation_button';
import { Link } from 'react-router-dom';

class NavbarBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clickGear: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    let that = this;

    this.dismissDropdown = this.dismissDropdown.bind(this);
    window.addEventListener('click', this.dismissDropdown, false);
  }

  dismissDropdown(e) {
    if (e.target.className !== "fa fa-cog navbar-gear" ) {
      this.setState({
        clickGear: false
      });
    }
  }

  toggleDropdown () {
    let clickState = this.state.clickGear ? false : true;
    this.setState({
      clickGear: clickState
    });
  }

  dropdown() {
    if (this.state.clickGear) {
      return <UserSettings logout={this.props.logout}/>;
    }
  }

  render () {

    return (
      <div className="navbar-banner">
        <button onClick={this.toggleDropdown}>
          <i className="fa fa-cog navbar-gear" aria-hidden="true" />
        </button>
        {this.dropdown()}
        <Link to="/conversations/new">
          <i className="fa fa-pencil-square-o" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.dismissDropdown, false);
  }
}

export default NavbarBanner;
