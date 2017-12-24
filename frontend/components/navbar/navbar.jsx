import React from 'react';
import NavbarBannerContainer from './navbar_banner/navbar_banner_container';
import ConversationListContainer from './conversation_list/conversation_list_container';

const Navbar = () => (
  <div className='navbar'>
    <NavbarBannerContainer />
    <ConversationListContainer />
  </div>
);

export default Navbar;
