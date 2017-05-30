import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import { FriendList, AddFriendInput, SelectFriendGender } from '../components';

class FriendListApp extends Component {

  render () {
    const { friendlist: { friendsById }} = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <div className="row">
          <div className="col-md-8">
            <AddFriendInput addFriend={actions.addFriend} />
          </div>
          <div className="col-md-4">
            <SelectFriendGender default="female" />
          </div>
        </div>
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend
})(FriendListApp)
