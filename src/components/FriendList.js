import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render () {
    const { actions, friends, onHandlerPrevious, onHandlerNext, onHandlePageNumber } = this.props
    return (
      <div>
        <ul className={styles.friendList}>
          {
            friends.map((friend, index) => {
              return (
                <FriendListItem
                  key={index}
                  id={index}
                  name={friend.name}
                  gender={friend.gender}
                  starred={friend.starred}
                  {...actions} />
              );
            })
          }
        </ul>
        <div>
          <button onClick={onHandlerPrevious}>Previous</button>
          {
            <button onClick={onHandlePageNumber}>1</button>
          }
          <button onClick={onHandlerNext}>Next</button>
        </div>
      </div>
    );
  }

}

const { array, object } = PropTypes

FriendList.propTypes = {
  friends: array.isRequired,
  actions: object.isRequired
};

export default FriendList;
