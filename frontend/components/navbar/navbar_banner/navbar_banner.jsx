import React from 'react';
import UserSettings from './user_settings';
import CreateConversationButton from './create_conversation_button';

const NavbarBanner = () => (
  <div className="conversation-settings">
    <i className="fa fa-gear">
      <UserSettings />
    </i>
    <CreateConversationButton />
  </div>
);

export default NavbarBanner;

// <NewConversationContainer />
