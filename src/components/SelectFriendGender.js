import React, { Component, PropTypes } from 'react';

class SelectFriendGender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGender: this.props.default || 'male'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({selectedGender: event.target.value});
  }

  render () {
    const { selectedGender } = this.state
    return (
      <select onChange={this.handleChange} value={selectedGender}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    )
  }
}

const { string } = PropTypes

SelectFriendGender.propTypes = {
  default: string
}

export default SelectFriendGender
