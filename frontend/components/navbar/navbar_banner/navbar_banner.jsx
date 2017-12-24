import React from 'react';
import UserSettings from './user_settings';
import CreateConversationButton from './create_conversation_button';

const NavbarBanner = () => (
  <div className="navbar-banner">
    <i className="fa fa-cog" aria-hidden="true">
      <UserSettings />
    </i>
    <CreateConversationButton />
  </div>
);

export default NavbarBanner;

// <NewConversationContainer />
