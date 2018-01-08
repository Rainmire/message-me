import React from 'react';

class MessageInputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.createMessage(message);
    this.setState({
      body: ''
    });
    e.currentTarget.reset();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleUploadPicture(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null) {
          

          // this.props.updateProfilePic(images[0].public_id)
          // .then((currentUser)=>(
          //   this.props.refreshConversations(currentUser)
          // ));
        }
      }
    );
  }

  render() {

    return(
      <form className="message-input-form" onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.update('body')}
          className="message-input"
          placeholder="Type message here..."
        />
      <button className="image-upload" onClick={this.handleUploadPicture}>
          <i className="fa fa-picture-o" aria-hidden="true" />
        </button>
      </form>
    );
  }
}

export default MessageInputForm;
