import React from 'react';

class MessageList extends React.Component {

  componentWillMount() {
    this.props.fetchMessages();
    this.props.setSocket("test");
  }

  render() {
    const {logout, messages} = this.props;

    return(
      <div>
        <h1>You are logged in!</h1>
        <button onClick={logout}>Log Out</button>

        <h1 className="message-list">MESSAGES: </h1>
        <ul>
          {messages.map(message => (
            <li>{message.body}</li>
          ))}
        </ul>

      </div>
    );
  }
}

export default MessageList;
