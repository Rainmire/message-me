import React from 'react';
import { Link } from 'react-router-dom';
import {toLocalTime} from 'util/local_time_conversion';

class ConversationList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchConversations().then(
      (action)=>{
        const path = this.props.location.pathname;

        if (path!=='/conversations/new') {
          if(this.props.conversations.length===0) {
            this.props.history.push('/conversations/new');
          }
          else {
            if (path==="/conversations" || path==="/conversations/") {
              const id = this.props.conversations[0].id;
              this.props.history.push(`/conversations/${id}`);
            }
          }
        }
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    const path = nextProps.location.pathname;
    if(nextProps.conversations.length===0) {
      nextProps.history.push('/conversations/new');
    }
    else {
      if (path==="/conversations" || path==="/conversations/") {
        const id = nextProps.conversations[0].id;
        nextProps.history.push(`/conversations/${id}`);
      }
    }
  }

  messageBody(conversation) {
    if (conversation.message_body !== "") {
      return conversation.message_body;
    }
    else {
      return "New conversation";
    }
  }

  render() {
    const { conversations } = this.props;
    return(
      <ul className = "conversation-list">
        {conversations.map((conversation, idx) => (
          <li key={idx} className="conversation-list-item">
            <Link className="conversation-item-link" to={`/conversations/${conversation.id}`}>
              <img className="latest-author-pic" src={conversation.author_pic}/>
              <div className="latest-message">
                <div className="conversation-item-header">
                  <div className="conversation-title">{conversation.title}</div>
                  <div className="conversation-timestamp">{toLocalTime(conversation.message_created_at)}</div>
                </div>
                <div className="latest-message-body">
                  {this.messageBody(conversation)}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default ConversationList;
