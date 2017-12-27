import React from 'react';
import UploadButton from 'components/upload_image/upload_button';

const UserSettings = ({logout})=>{
	return (
		<ul className="gear-dropdown">
		  <li>
		    <ul className="user-settings">
					<li><UploadButton /></li>
				</ul>
			</li>
			<li>
				<ul className="session-settings">
					<li><button onClick={logout}>Log Out</button></li>
				</ul>
			</li>
		</ul>
	);
};

export default UserSettings;
