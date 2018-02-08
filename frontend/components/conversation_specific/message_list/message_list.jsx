import React from 'react';
import MessageInputContainer from 'components/message_input/message_input_container';
import MessageListItem from './message_list_item';
import { ClipLoader } from 'react-spinners';

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    const convoId = this.props.conversation_id;
    // debugger;
    this.props.fetchConversationDetails(convoId)
    .then(
      ()=>{
        // debugger;
        this.props.receiveCurrentConversationId(convoId);
      }
    )
    .then(
      ()=>{
        // debugger;
        this.setState({loading: false});
      },
      ()=>this.props.history.push('/conversations/new')
    );
  }

  componentWillReceiveProps(nextProps) {
    const convoId = nextProps.match.params.id;
    if(this.props.match.params.id!==convoId) {
      this.setState({loading: true});
      // debugger;
      this.props.fetchConversationDetails(convoId)
      .then(
        ()=>{
          this.props.receiveCurrentConversationId(convoId);
        }
      )
      .then(
        ()=>{
          this.setState({loading: false});
        }
      );
      // .then(
      //   ()=>{
      //     this.props.setSocket(convoId);
      //     this.setState({loading: false});
      //   },
      //   ()=>this.props.history.push('/conversations/new')
      // );
    }
  }

  componentDidUpdate() {
    if( !this.state.loading ) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behaviour: 'smooth' });
  }

  render() {
    const { messages, currentUserId, members } = this.props;
    if( !this.state.loading ) {
      return(
        <div className="message-container">
          <ul className="message-list">
            {
              messages.map((message, idx) => {
                const author = members[message.user_id];
                return <MessageListItem
                  key={idx}
                  message={message}
                  idx={idx}
                  author={author}
                  currentUserId={currentUserId}
                  scrollToBottom={this.scrollToBottom} />;
              })
            }
            <div ref={el => { this.messagesEnd = el; }} />
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
