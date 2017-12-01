import React from 'react';
import {Link} from 'react-router-dom';

class ConversationList extends React.Component {

  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSendSuccess = this.handleSendSuccess.bind(this);
    // this.props.fetchMessages();
  }

  componentDidMount() {
    this.props.fetchConversations().then(
      (action)=>{
        if(this.props.conversations.length===0) {
          this.props.history.push('/conversations/new');
        }
        else {
          if (this.props.location.pathname==="/conversations" ||
              this.props.location.pathname==="/conversations/") {
                const id = this.props.conversations[0].id;
                this.props.history.push(`/conversations/${id}`);
          }
        }
      }
    );
    // this.props.setSocket("test");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname==="/conversations" ||
        nextProps.location.pathname==="/conversations/") {
          const id = nextProps.conversations[0].id;
          nextProps.history.push(`/conversations/${id}`);
    }
  }


  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }

  render() {
    const { conversations, logout } = this.props;

    return(
      <div className="navbar">
        <div className="conversation-settings">
          <button onClick={logout}>Log Out</button>
          <Link to="/conversations/new">Create Conversation</Link>
        </div>

        <ul className = "conversation-list">
          {conversations.map((conversation, idx) => (
            <li key={idx} className="conversation-list-item"><a href={`/#/conversations/${conversation.id}`}>{conversation.title}</a></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ConversationList;
