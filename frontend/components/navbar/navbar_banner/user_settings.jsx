import React from 'react';
import UploadButtonContainer from 'components/upload_image/upload_button_container';

const UserSettings = ({logout})=>{
	return (
		<ul className="gear-dropdown">
		  <li>
		    <ul className="user-settings">
					<li><UploadButtonContainer /></li>
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
