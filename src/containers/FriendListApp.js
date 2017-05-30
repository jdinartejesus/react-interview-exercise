import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import { FriendList, AddFriendInput, SelectFriendGender } from '../components';

class FriendListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: 'female'
    };

    this.onSubmitFriend = this.onSubmitFriend.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
  }

  onSubmitFriend () {
    const { name, gender } = this.state;

    if (name.trim() !== '') {
      this.props.addFriend(name, gender);
      this.setState({ name: '',  gender: 'female'});
    }
  }

  onChangeName (name) {
    this.setState({name})
  }

  onChangeGender (gender) {
    this.setState({gender})
  }

  render () {
    const { name, gender } = this.state
    const { friendlist: { friendsById } } = this.props;

    const actions = {
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <div className="row no-margin">
          <div className="col-md-8 no-padding">
            <AddFriendInput value={name} onChangeName={this.onChangeName} onAddFriend={this.onSubmitFriend} />
          </div>
          <div className="col-md-4 no-padding">
            <SelectFriendGender value={gender} onChangeGender={this.onChangeGender} />
          </div>
          <div className="col-md-12 no-padding">
            <button className={classnames('btn btn-default', styles.friendAddButton)} onClick={this.onSubmitFriend} >Submit</button>
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
