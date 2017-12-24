import React from 'react';

const UserSettings = ()=>(
	<ul id="gear-dropdown" className="gear-dropdown hidden">
	  <li>
	    <ul className="editions">
			<span className="dropdown-subtitle">Edition</span>
			<li><a href="#">CSS</a></li>
			<li><a href="#">HTML</a></li>
			<li><a href="#">Javascript</a></li>
			<li><a href="#">Ruby</a></li>
		</ul>
	</li>
	<li>
		<span className="dropdown-subtitle">Help</span>
		<ul className="help">
			<li><a href="#">FAQ</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</li>
</ul>
);

export default UserSettings;
