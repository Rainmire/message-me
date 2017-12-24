import React from 'react';

const UserSettings = ({logout})=>{
	return (
		<ul id="gear-dropdown" className="gear-dropdown hidden">
		  <li>
		    <ul className="editions">
					<li><a href="#">User Settings</a></li>
				</ul>
			</li>
			<li>
				<ul className="help">
					<li><button onClick={logout}>Log Out</button></li>
				</ul>
			</li>
		</ul>
	);
};

export default UserSettings;

// <div className="conversation-settings">
//   <button onClick={logout}>Log Out</button>
//   <Link to="/conversations/new">Create Conversation</Link>
// </div>
