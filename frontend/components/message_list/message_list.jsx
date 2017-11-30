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
    // Promise.all([
    //   this.props.fetchConversationDetails(this.props.conversation_id),
    //   this.props.setSocket("test")
    // ]).then(()=>(this.setState({loading: false})));
    const convoId = this.props.conversation_id;
    this.props.fetchConversationDetails(convoId)
    .then(
      ()=>{
        this.props.setSocket(convoId);
        this.setState({loading: false});
      },
      ()=>this.props.history.push('/conversations/new')
    );
    // .then(
    //   ()=>(this.setState({loading: false}))
    // );
  }

  componentWillReceiveProps(nextProps) {
    const convoId = nextProps.match.params.id;
    if(this.props.match.params.id!==convoId) {
      this.setState({loading: true});
      this.props.fetchConversationDetails(convoId)
      .then(
        ()=>{
          this.props.setSocket(convoId);
          this.setState({loading: false});
        },
        ()=>this.props.history.push('/conversations/new')
      );
    }
  }

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
              messages.map((message, idx) => {
                const author = members[message.user_id];
                const messageClass = author.id===currentUserId ? "message-item my-message" : "message-item their-message";
                const timestamp = toLocalTime(message.created_at);
                return (
                  <li key={idx} className={messageClass}>
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
