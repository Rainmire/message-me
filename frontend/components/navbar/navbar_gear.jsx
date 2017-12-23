import React from 'react';

const NavbarGear = ()=>(
	<ul id="gear-dropdown" className="gear-dropdown hidden">
	  <li>
	    <ul class="editions">
			<span class="dropdown-subtitle">Edition</span>
			<li><a href="#">CSS</a></li>
			<li><a href="#">HTML</a></li>
			<li><a href="#">Javascript</a></li>
			<li><a href="#">Ruby</a></li>
		</ul>
	</li>
	<li>
		<span class="dropdown-subtitle">Help</span>
		<ul class="help">
			<li><a href="#">FAQ</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</li>
</ul>
);

export default NavbarGear;
