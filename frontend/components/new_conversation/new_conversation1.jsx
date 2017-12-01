// import React from 'react';
// import UserSearchContainer from '../user_search/user_search_container';
//
// class NewConversation extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       targetUserId: ''
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const targetUser = this.state;
//     this.props.createConversation(targetUser).then(
//       (id)=>(
//         this.props.history.push(`/conversations/${id}`)
//       ),
//       (action)=>(
//         this.props.history.push('/conversations/new')
//       )
//     );
//   }
//
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   render() {
//     return(
//       <div className="message-container">
//         <UserSearchContainer submitUsers={
//           (users)=>(
//             this.props.createConversation(users).then(
//               (id)=>(
//                 this.props.history.push(`/conversations/${id}`)
//               ),
//               (action)=>(
//                 this.props.history.push('/conversations/new')
//               )
//             );
//           }
//         />
//       </div>
//     );
//   }
//
// }
//
// export default NewConversation;
