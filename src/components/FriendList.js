import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render () {
    const { actions, friends } = this.props;

    return (
      <ul className={styles.friendList}>
        {
          friends.map((friend, index) => {
            return (
              <FriendListItem
                key={index}
                id={friend.id}
                name={friend.name}
                gender={friend.gender}
                starred={friend.starred}
                {...actions} />
            );
          })
        }
      </ul>
    );
  }

}

const { array, object } = PropTypes

FriendList.propTypes = {
  friends: array.isRequired,
  actions: object.isRequired
};

export default FriendList;
