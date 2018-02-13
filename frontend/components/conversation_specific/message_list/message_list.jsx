import React from 'react';
import MessageInputContainer from 'components/message_input/message_input_container';
import MessageListItem from './message_list_item';
import { ClipLoader } from 'react-spinners';

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    const convoIdStr = this.props.conversationId;
    const convoIdInt = parseInt(convoIdStr);

    this.props.fetchConversationDetails(convoIdInt)
    .then(() => (
      this.props.receiveCurrentConversationId(convoIdInt)
    ));
  }

  componentWillReceiveProps(nextProps) {
    const convoIdStr = nextProps.match.params.id;
    const convoIdInt = parseInt(convoIdStr);
    if(this.props.match.params.id!==convoIdStr) {
      this.props.fetchConversationDetails(convoIdInt)
      .then(
        ()=>{
          this.props.receiveCurrentConversationId(convoIdInt);
        }
      );
    }
  }

  componentDidUpdate() {
    if( !this.props.loading ) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behaviour: 'smooth' });
  }

  render() {
    const { loading, messages, currentUserId } = this.props;
    if( !loading ) {
      return(
        <div className="message-container">
          <ul className="message-list">
            {
              messages.map((message, idx) => (
                <MessageListItem
                  key={idx}
                  message={message}                 
                  currentUserId={currentUserId}
                  scrollToBottom={this.scrollToBottom} />
              ))
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
            loading={true}
          />
        </div>
      </div>
    );
  }
}

export default MessageList;
