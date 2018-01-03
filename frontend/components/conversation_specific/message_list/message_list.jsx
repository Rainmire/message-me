import React from 'react';
import {toLocalTime} from 'util/local_time_conversion';
import MessageInputContainer from 'components/message_input/message_input_container';
import { ClipLoader } from 'react-spinners';

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const convoId = this.props.conversation_id;
    this.props.fetchConversationDetails(convoId)
    .then(
      ()=>{
        this.props.setSocket(convoId);
        this.setState({loading: false});
      },
      ()=>this.props.history.push('/conversations/new')
    );
  }

  componentWillReceiveProps(nextProps) {
    this.props.setSocket(nextProps.conversation_id);
  }

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
              })
            }
          </ul>
          <MessageInputContainer/>
        </div>
      );
    }
    return (
      <div className="message-container">
        <div className = "message-loader">
          <ClipLoader
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default MessageList;
