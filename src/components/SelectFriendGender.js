import React, { Component, PropTypes } from 'react';
import styles from './SelectFriendGender.css';

class SelectFriendGender extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.props.onChangeGender(e.target.value)
  }

  render () {
    const { value } = this.props

    return (
      <div className={styles.friendGender}>
        <select className={styles.friendGenderSelect} onChange={this.handleChange} value={value}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    )
  }
}

const { string } = PropTypes

SelectFriendGender.propTypes = {
  value: string.isRequired
}

export default SelectFriendGender
