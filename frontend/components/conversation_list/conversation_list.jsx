import React from 'react';

class ConversationList extends React.Component {

  constructor(props) {
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSendSuccess = this.handleSendSuccess.bind(this);
    // this.props.fetchMessages();
  }

  // handleSubmit(e) {
  //   // debugger;
  //   e.preventDefault();
  //   const message = Object.assign({}, this.state);
  //   // this.props.createMessage(message).then(
  //   //   () => this.setState({
  //   //     body: ''
  //   //   })
  //   //   // () => this.handleSendSuccess(e)
  //   // );
  //   this.props.createMessage(message);
  //   this.setState({
  //     body: ''
  //   });
  //   e.currentTarget.reset();
  // }

  componentWillMount() {
    this.props.fetchConversations();
    // this.props.setSocket("test");
  }


  // update(field) {
  //   return e => this.setState({
  //     [field]: e.currentTarget.value
  //   });
  // }

  render() {
    const { conversations } = this.props;

    return(
      <div className = "navbar">
        <ul className = "conversation-list">
          {conversations.map(conversation => (
            <li>{conversation.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ConversationList;
