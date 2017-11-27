import React from 'react';

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    // this.getMessageAuthor = this.getMessageAuthor.bind(this);
  }

  componentDidMount() {
    this.props.fetchMembers(1);
    this.props.fetchMessages();
    this.props.setSocket("test");
  }

  // componentWillRe

  // getMessageAuthor(message) {
  //   this.state
  // }

  render() {
    const {logout, messages} = this.props;

    return(
      <div>
        <h1>You are logged in!</h1>
        <button onClick={logout}>Log Out</button>

        <h1 className="message-list">MESSAGES: </h1>
        <ul>
          {messages.map(message => (
            <li>
              <div className="message-body">
                {message.body}
              </div>

            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default MessageList;

// <div className="message-author">{this.getMessageAuthor(message)}</div>
