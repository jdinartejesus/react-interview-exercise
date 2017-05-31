import PropTypes from 'prop-types'
import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {

  render () {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
          <div>
            <h6 className="text-capitalize no-margin">
              Gender: {this.props.gender ? this.props.gender : 'No found' }
            </h6>
            <small>xx friends in common</small>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
            onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

const { number, string, bool, func } = PropTypes

FriendListItem.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  gender: string,
  starred: bool,
  starFriend: func.isRequired
};

export default FriendListItem
