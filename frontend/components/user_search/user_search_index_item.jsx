import React from 'react';
import { Link } from 'react-router-dom';

class UserSearchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.user = props.user;
    // this.state = { following: this.user.followed_by_current_user };
  }

  handleClick(action) {
    // return (e) => {
    //   e.preventDefault();
    //   if (action === "follow") {
    //     let oppositeCurrentFollowing = !this.state.following;
    //     this.setState({ following: oppositeCurrentFollowing}, () => {
    //       this.followUser(this.user.id, this.currentUser.id, this.props.feedType, this.props.profileUser);
    //
    //     });
    //   } else {
    //     let oppositeCurrentFollowing = !this.state.following;
    //     this.setState({ following: oppositeCurrentFollowing}, () => {
    //       this.unfollowUser(this.user.id, this.currentUser.id, this.props.feedType, this.props.profileUser);
    //
    //     });
    //   }
    // };
  }

  render() {
    const {user} = this.props;
    return (
      <li>
        <button>
          {user.display_name}
        </button>
      </li>
    );
    // let followButton;
    // if (this.state.following) {
    //   // Unfollow button
    //   followButton = <button className="UnfollowButton-US" onClick={this.handleClick("unfollow")}>Following</button>;
    // } else {
    //   // follow button
    //   followButton = <button className="FollowButton-US" onClick={this.handleClick("follow")}>Follow</button>;
    // }
    //
    // return(
    //   <li>
    //     <Link onClick={this.props.clearState} className="UserSearchImgAnchor"
    //       to={`/profile/${this.user.id}`}><img src={this.user.img_url}/></Link>
    //     <Link onClick={this.props.clearState} to={`/profile/${this.user.id}`}><p>{this.user.name}</p>
    //     <p>{"@" + this.user.username}</p></Link>
    //     {followButton}
    //   </li>
    // );
  }
}

export default UserSearchIndexItem;
