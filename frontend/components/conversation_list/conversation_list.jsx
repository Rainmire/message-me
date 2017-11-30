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
        if(Object.keys(action.conversations).length===0) {
          this.props.history.push('/conversations/new');
        }
        else {
          if (this.props.location.pathname==="/conversations" ||
              this.props.location.pathname==="/conversations/") {
                console.log(this.props);
                const id = this.props.conversations[0].id;
                this.props.history.push(`/conversations/${id}`);
          }
        }
      }
    );
    // this.props.setSocket("test");
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
          {conversations.map(conversation => {
            return <li>{conversation.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ConversationList;
