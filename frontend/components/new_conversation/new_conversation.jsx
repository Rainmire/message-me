import React from 'react';

class NewConversation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      targetUserId: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const targetUser = this.state;
    this.props.createConversation(targetUser).then(
      (id)=>{
        debugger;
        console.log("conversation created");
        console.log(id);
        this.props.history.push(`/conversations/${id}`);  //QUESTION No action?
      },
      (action)=>{
        console.log("conversation failed");
        console.log(action.conversation);
        this.props.history.push('/conversations/new');
      }
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.update('targetUserId')}
          placeholder="enter user"
        />
      </form>
    );
  }

}

export default NewConversation;
