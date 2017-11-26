import React from 'react';

// import Messages from './messages/messages';

class Conversations extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.props.fetchMessages();
  }

  // handleSubmit(logout) {
  //   debugger;
  //   //e.preventDefault();
  //   this.props.logout();
  // }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.createMessage(message).then(
      () => this.setState({
        body: ''
      })
    );
  }

  componentWillMount() {
    debugger;
    this.props.fetchMessages();
    this.props.setSocket("channel_test");
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const {logout, messages} = this.props;

    return(
      <div>
        <h1>You are logged in!</h1>
        <button onClick={logout}>Log Out</button>

        <div className="messages">
          <h1>MESSAGES: </h1>
          <ul>
            {messages.map(message => (
              <li>{message.body}</li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              onChange={this.update('body')}
              className="message-input"
              placeholder="input message here..."
            />
          </form>
        </div>

      </div>
    );
  }
}

export default Conversations;
