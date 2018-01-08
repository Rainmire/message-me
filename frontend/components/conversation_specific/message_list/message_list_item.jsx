import React from 'react';
import {toLocalTime} from 'util/local_time_conversion';

class MessageListItem extends React.Component {

  render() {
    const messageListItem = (message, idx) => {
      const { members, currentUserId } = this.props;
      const author = members[message.user_id];
      const messageClass = author.id===currentUserId ? "message-item my-message" : "message-item their-message";
      const timestamp = toLocalTime(message.created_at);
      return (
        <li key={idx} className={messageClass}>
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
            <div className="message-body">
              {message.body}
            </div>
          </div>
        </li>
      );
    };
  }
}



export default MessageListItem;
