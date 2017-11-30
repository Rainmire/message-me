import React from 'react';

class ConversationList extends React.Component {

  render() {
    const { members } = this.props;

    return(
      <div className="members-box">
        <h1>People</h1>
        <ul className="members-list">
          <li className="add-member">Add Member</li>
            {members.map((member,idx) => (
              <li key={idx} className="member-list-item">{member.display_name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default ConversationList;
