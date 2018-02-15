import React from 'react';
import { Link } from 'react-router-dom';
import {toLocalTime} from 'util/local_time_conversion';
import { ClipLoader } from 'react-spinners';

class ConversationList extends React.Component {

  componentDidMount() {
    this.props.setSocket();
    this.props.fetchConversations().then(() => {
      const path = this.props.location.pathname;

      if (path!=='/conversations/new') {
        if(this.props.conversations.length===0) {
          this.props.history.push('/conversations/new');
        }
        else {
          if (path==="/conversations" || path==="/conversations/") {
            const id = this.props.conversations[0].conversationId;
            this.props.history.push(`/conversations/${id}`);
          }
        }
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    const path = nextProps.location.pathname;
    if(nextProps.conversations.length!==0) {
      if (path==="/conversations" || path==="/conversations/") {
        const id = nextProps.conversations[0].conversationId;
        nextProps.history.push(`/conversations/${id}`);
      }
    }
  }

  messageBody(conversation) {
    if (conversation.messageType !== "hidden") {
      return `${conversation.displayName}: ${conversation.messageBody}`;
    }
    else {
      return "New Conversation";
    }
  }

  conversationListItem(conversation, idx) {
    return (
      <li key={idx} className="conversation-list-item">
        <Link className="conversation-item-link" to={`/conversations/${conversation.conversationId}`}>
          <img className="latest-author-pic" src={conversation.profilePic}/>
          <div className="latest-message">
            <div className="conversation-item-header">
              <div className="conversation-title">{conversation.title}</div>
              <div className="conversation-timestamp">{toLocalTime(conversation.createdAt)}</div>
            </div>
            <div className="latest-message-body">
              {this.messageBody(conversation)}
            </div>
          </div>
        </Link>
      </li>
    );
  }

  render() {
    const { loading, conversations } = this.props;
    if( !loading ) {
      return(
        <ul className = "conversation-list">
          {conversations.map((conversation, idx) => (
            this.conversationListItem(conversation, idx)
          ))}
        </ul>
      );
    }
    else {
      return(
        <div className="conversation-list">
          <div className = "conversation-loader">
            <ClipLoader
              color={'#123abc'}
              loading={true}
            />
          </div>
        </div>
      );
    }
  }
}

export default ConversationList;
