import React from 'react';
import NavbarBanner from './navbar_banner/navbar_banner';
import ConversationListContainer from './conversation_list/conversation_list_container';

const Navbar = () => (
  <div className='navbar'>
    <NavbarBanner />
    <ConversationListContainer />
  </div>
);

export default Navbar;
