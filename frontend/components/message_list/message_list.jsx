import React from 'react';
import {toLocalTime} from '../../util/local_time_conversion';
import MessageInputContainer from '../message_input/message_input_container';

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    // this.getMessageAuthor = this.getMessageAuthor.bind(this);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    //set state to loading
    //TODO combine into fetchConversation
    // Promise.all([
    //   this.props.fetchMembers(1),
    //   this.props.fetchMessages(),
    //   this.props.setSocket("test")
    // ]).then(()=>(this.setState({loading: false})));
    Promise.all([
      this.props.fetchConversation(this.props.conversation_id),
      this.props.setSocket("test")
    ]).then(()=>(this.setState({loading: false})));
  }

  // componentWillRe

  // getMessageAuthor(message) {
  //   this.state
  // }

  render() {
    const { messages, members, currentUserId} = this.props;
    if( !this.state.loading ) {
      return(
        <div className="message-container">
          <ul className="message-list">
            {
              messages.map(message => {
                const author = members[message.user_id];
                const messageClass = author.id===currentUserId ? "message-item my-message" : "message-item their-message";
                const timestamp = toLocalTime(message.created_at);
                return (
                  <li className={messageClass}>
                    <div className="message-info">
                      <div className="author-name">
                        {author.display_name}
                      </div>
                      <div className="timestamp">
                        {timestamp}
                      </div>
                    </div>
                    <div className="message-body">
                      {message.body}
                    </div>

                  </li>
                );
              })
            }
          </ul>
          <MessageInputContainer />
        </div>
      );
    }
    return (
      <div>Loading...</div>
    );

  }
}

export default MessageList;

// <div className="message-author">{this.getMessageAuthor(message)}</div>

// <h1>You are logged in!</h1>
// <button onClick={logout}>Log Out</button>
//
// <h1>MESSAGES: </h1>
