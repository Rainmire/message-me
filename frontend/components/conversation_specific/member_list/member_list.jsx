import React from 'react';
import UserSearchContainer from 'components/user_search/user_search_container';

class ConversationList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      clickAddMember: false,
      memberId: ''
    };
    this.addMemberButton = this.addMemberButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addMemberButton() {
    if (this.state.clickAddMember) {
      // return (
      //   <form onSubmit={this.handleSubmit}>
      //     <input type="text"
      //       onChange={this.update('memberId')}
      //       placeholder= "Enter user id..."
      //     />
      //   </form>
      // );
      return <UserSearchContainer userSearchAction={this.props.addMembers} />;
    }
    else {
      return (
        <button className="add-member-button" onClick={()=>this.setState({clickAddMember: true})} >
          <div className="add-member-plus">
            &#43;
          </div>
          <div className="add-member-text">
            Add Member
          </div>
        </button>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // const memberId = this.state.memberId;
    // this.props.processForm(memberId);
    this.setState({clickAddMember: false});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const { members } = this.props;

    return(
      <ul className="member-list">
        <li className="member-list-title">Members</li>
        <li>
          {this.addMemberButton()}
        </li>
        {members.map((member,idx) => (
          <li key={idx} className="member-list-item">
            <img className="member-list-pic" src={member.profile_pic}></img>
            <div className="member-list-name">
              {member.display_name}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ConversationList;
