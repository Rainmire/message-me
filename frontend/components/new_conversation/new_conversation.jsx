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
      (id)=>(
        this.props.history.push(`/conversations/${id}`)
      ),
      (action)=>(
        this.props.history.push('/conversations/new')
      )
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <form className="message-container" onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.update('targetUserId')}
          placeholder="enter user"
        />
      </form>
    );
  }

}

export default NewConversation;
