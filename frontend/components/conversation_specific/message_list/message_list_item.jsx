import React from 'react';
import {toLocalTime} from 'util/local_time_conversion';

class MessageListItem extends React.Component {

  messageBody(message) {
    if (message.message_type === "text") {
      return (
        <div className="message-body">
          {message.body}
        </div>
      );
    }
    else {
      return (
        <img className="message-image" onLoad={this.props.scrollToBottom} src={message.body}/>
      );
    }

  }

  render() {
    const { message, author, currentUserId } = this.props;
    // debugger;
    const messageClass = author.id===currentUserId ? "message-item my-message" : "message-item their-message";
    const timestamp = toLocalTime(message.created_at);
    return (
      <li className={messageClass}>
        <img className="author-pic" src={author.profile_pic} />
        <div className="message-text">
          <div className="message-info">
            <div className="author-name">
              {author.display_name}
            </div>
            <div className="timestamp">
              {timestamp}
            </div>
          </div>
          {this.messageBody(message)}
        </div>
      </li>
    );
  }

}



export default MessageListItem;
