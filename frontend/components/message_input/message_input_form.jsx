import React from 'react';

class MessageInputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: '',
      image: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUploadPicture = this.handleUploadPicture.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.createMessage(message);
    this.setState({
      body: '',
      image: false
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
          // this.setState({
          //   body: images[0].public_id,
          //   image: true
          // });

          const message = {
            body: images[0].public_id,
            image: true
          };
          this.props.createMessage(message);

          // e.currentTarget.reset();

          // this.handleSubmit(e);

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
      <div className="message-input-box">
        <form className="message-input-form" onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.update('body')}
            className="message-input"
            placeholder="Type message here..."
          />
        </form>
        <button className="image-upload" onClick={this.handleUploadPicture}>
          <i className="fa fa-picture-o" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default MessageInputForm;
