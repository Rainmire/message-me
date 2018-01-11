import React from 'react';

class MessageInputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: '',
      message_type: 'text'
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
      message_type: 'text'
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
        
          const message = {
            body: images[0].public_id,
            message_type: 'image'
          };
          this.props.createMessage(message);

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
