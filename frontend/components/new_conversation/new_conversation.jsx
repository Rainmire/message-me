import React from 'react';
import UserSearchContainer from 'components/user_search/user_search_container';

class NewConversation extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(users) {
    this.props.createConversation(users)
    .then(
      () => (
      this.props.fetchConversations()
      )
    )
    .then(
      ()=>(
        this.props.history.push(`/conversations/${this.props.conversations[0].id}`)
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
      <div className="message-container">
        <div className="new-conversation-search">
          <UserSearchContainer userSearchAction={ this.handleSubmit } />
        </div>
      </div>
    );
  }

}

export default NewConversation;
