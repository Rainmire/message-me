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
    this.setState({clickAddMember: false});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    const { members, currentUser } = this.props;

    return(
      <ul className="member-list">
        <li className="member-list-title">Members</li>
        <li>
          {this.addMemberButton()}
        </li>
        <li className = "member-list-item">
          <img className="member-list-pic" src={currentUser.profile_pic} />
          <div className="member-list-name">
            {currentUser.display_name}
          </div>
        </li>
        {members.map((member,idx) => (
          <li key={idx} className="member-list-item">
            <img className="member-list-pic" src={member.profile_pic} />
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
