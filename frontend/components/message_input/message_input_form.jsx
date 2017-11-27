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

  render() {

    return(
      <div>
        <h1>MESSAGE INPUT FORM: </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            onChange={this.update('body')}
            className="message-input"
            placeholder="write message here..."
          />
        </form>
      </div>
    );
  }
}

export default MessageInputForm;
