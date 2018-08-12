import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../actions/users';
import UserDetails from '../components/UserDetails';

class User extends Component {

  deleteOnClick = user => {
    this.props.removeUser(user)
    window.location = '/users'
  }

  render () {
    const { user } = this.props;

    return (
      <div>
        <UserDetails key={user.id} user={user} />
        <button onClick={() => this.deleteOnClick(user)}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const user = state.users.find(user => user.id === parseInt(ownProps.match.params.userId))

  if (user) {
    return { user }
  } else {
    return { user: {} }
  }
}

export default connect(mapStateToProps, { removeUser })(User);
