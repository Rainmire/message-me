import React from 'react';
// var PropTypes = require('prop-types');

class UploadButton extends React.Component {

  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images){
        if (error === null) {
          this.updateProfilePic(images[0].url);
        }
      });
  }

  render () {
    return (
      <button className="user-setting-item" onClick={this.upload}>Edit Profile Image</button>
    );
  }

}

export default UploadButton;
