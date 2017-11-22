import React from 'react';

class Conversations extends React.Component {

  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(logout) {
  //   debugger;
  //   //e.preventDefault();
  //   this.props.logout();
  // }

  render() {
    const {logout} = this.props;
    return(
      <div>
        <h1>You are logged in!</h1>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
}

export default Conversations;
