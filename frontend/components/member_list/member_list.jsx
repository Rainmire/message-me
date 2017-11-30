import React from 'react';

class ConversationList extends React.Component {

  render() {
    const { members } = this.props;

    return(
      <div className="member-box">
        <ul className="member-list">
          <li className="member-list-title">Members</li>
          <li className="add-member">
            <div className="add-member-plus">
              &#43;
            </div>
            <div className="add-member-text">
              Add Member
            </div>
          </li>
          {members.map((member,idx) => (
            <li key={idx} className="member-list-item">{member.display_name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ConversationList;
