import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserFormData } from '../actions/userForm';
import { createUser } from '../actions/users';

class UserForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentUserFormData = Object.assign({}, this.props.userFormData, {
      [name]: value
    })
    this.props.updateUserFormData(currentUserFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.props.userFormData)
    window.location = '/users'
  }

  render () {
    const { first_name, last_name } = this.props.userFormData;

    return (
      <div>
        Add an user
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="first_name"
              value={first_name}
            />
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="last_name"
              value={last_name}
            />
          </div>
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    userFormData: state.userFormData
  })
}

export default connect(mapStateToProps, {
  updateUserFormData,
  createUser
})(UserForm);
