import React from 'react';
import {toLocalTime} from 'util/local_time_conversion';

class MessageListItem extends React.Component {

  messageBody(message) {
    if (message.messageType === "text") {
      return (
        <div className="message-body">
          {message.messageBody}
        </div>
      );
    }
    else {
      return (
        <img className="message-image" onLoad={this.props.scrollToBottom} src={message.messageBody}/>
      );
    }

  }

  render() {
    const { message, currentUserId } = this.props;
    const messageClass = message.authorId===currentUserId ? "message-item my-message" : "message-item their-message";
    const timestamp = toLocalTime(message.createdAt);
    return (
      <li className={messageClass}>
        <img className="author-pic" src={message.profilePic} />
        <div className="message-text">
          <div className="message-info">
            <div className="author-name">
              {message.displayName}
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
