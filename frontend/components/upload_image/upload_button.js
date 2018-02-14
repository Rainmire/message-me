import React from 'react';

class UploadButton extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null) {
          this.props.updateProfilePic(images[0].public_id)
          .then((currentUser)=>(
            this.props.refreshConversations(currentUser)
          ));
        }
      }
    );
  }

  render () {
    return (
      <button className="user-setting-item" onClick={this.upload}>Edit Profile Image</button>
    );
  }

}

export default UploadButton;
