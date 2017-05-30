import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend, changeName, changeGender} from '../actions/FriendsActions';
import { FriendList, AddFriendInput, SelectFriendGender } from '../components';

class FriendListApp extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
    this.onSubmitFriend = this.onSubmitFriend.bind(this)

    this.onHandlerPrevious = this.onHandlerPrevious.bind(this)
    this.onHandlerNext = this.onHandlerNext.bind(this)
    this.onHandlePageNumber = this.onHandlePageNumber.bind(this)
  }

  onSubmitFriend () {
    const { name, gender } = this.props.friendlist.newFriend;

    if (name.trim() !== '') {
      this.props.addFriend(name, gender);
      this.props.changeName('');
      this.props.changeGender('female');
    }
  }

  onChangeName (name) {
    this.props.changeName(name);
  }

  onChangeGender (gender) {
    this.props.changeGender(gender);
  }

  onHandlerPrevious () {
    console.log('hello')
  }

  onHandlerNext () {
    console.log('bye')
  }

  onHandlePageNumber (number) {

  }

  render () {
    const { name, gender } = this.props.friendlist.newFriend;
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
        <FriendList
          friends={friendsById}
          actions={actions}
          onHandlerPrevious={this.onHandlerPrevious}
          onHandlerNext={this.onHandlerNext}
          onHandlePageNumber={this.onHandlePageNumber}
        />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, {
  changeName,
  changeGender,
  addFriend,
  deleteFriend,
  starFriend
})(FriendListApp)
