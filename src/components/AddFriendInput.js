import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.props.onChangeName(e.target.value)
  }

  handleSubmit (e) {
    if (e.which === 13) {
      this.props.onAddFriend()
    }
  }
  render () {
    const { value } = this.props
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Type the name of a friend"
        value={value}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    );
  }
}

const { func, string } = PropTypes

AddFriendInput.propTypes = {
  value: string.isRequired,
  onChangeName: func.isRequired,
  onAddFriend: func.isRequired
};

export default AddFriendInput
