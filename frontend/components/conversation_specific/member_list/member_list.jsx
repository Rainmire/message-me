import React from 'react';
import UserSearchContainer from 'components/user_search/user_search_container';

class ConversationList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      clickAddMember: false
    };
    this.addMemberButton = this.addMemberButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({clickAddMember: false});
    }
  }

  addMemberButton() {
    if (this.state.clickAddMember) {
      return (
        <li className="memberlist-search">
          <UserSearchContainer userSearchAction={this.props.addMembers} />
        </li>
      );
    }
    else {
      return (
        <li>
          <button className="add-member-button" onClick={()=>this.setState({clickAddMember: true})} >
            <div className="add-member-plus">
              &#43;
            </div>
            <div className="add-member-text">
              Add Members
            </div>
          </button>
        </li>
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

  memberItem(member, idx, currentUser) {
    if (member.userId !== currentUser.userId) {
      return (
        <li key={idx} className="member-list-item">
          <img className="member-list-pic" src={member.profilePic} />
          <div className="member-list-name">
            {member.displayName}
          </div>
        </li>
      );
    }
  }

  render() {
    const { members, currentUser } = this.props;

    return(
      <ul className="member-list">
        <li className="member-list-title">Members</li>
        {this.addMemberButton()}
        <li className = "member-list-item">
          <img className="member-list-pic" src={currentUser.profilePic} />
          <div className="member-list-name">
            {currentUser.displayName}
          </div>
        </li>
        {members.map((member,idx) => (
          this.memberItem(member, idx, currentUser)
        ))}
      </ul>
    );
  }
}

export default ConversationList;
