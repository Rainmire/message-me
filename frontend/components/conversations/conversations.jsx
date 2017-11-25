import React from 'react';

// import Messages from './messages/messages';

class Conversations extends React.Component {

  // constructor(props) {
  //   super(props);
  //   //this.handleSubmit = this.handleSubmit.bind(this);
  //   // this.props.fetchMessages();
  // }

  // handleSubmit(logout) {
  //   debugger;
  //   //e.preventDefault();
  //   this.props.logout();
  // }

  componentWillMount() {
    this.props.fetchMessages();
  }

  // componentDidMount() {
  //   debugger
  //   this.props.fetchMessages();
  // }

  // componentWillReceiveProps(nextProps) {
  //   debugger
  //   this.nextProps.fetchMessages();
  // }

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
        </div>

      </div>
    );
  }
}

export default Conversations;
