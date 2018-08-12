import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UserPanel from '../components/UserPanel';
import UserForm from './UserForm';
import User from './User';
import { getUsers } from '../actions/users';
import './Users.css';


class Users extends Component {

  componentDidMount() {
    this.props.getUsers()
  }

  render () {
    const { match, users } = this.props;

    return (
      <div>
        <Switch>
          <Route path={`${match.url}/new`} component={UserForm} />
          <Route path={`${match.url}/:userId`} component={User} />

          <Route exact path={`${match.url}`} render={() => (
            <div className="UsersContainer">
              <h1>Users</h1>
              {users.map(user => <UserPanel key={user.id} match={match} user={user} />)}
            </div>
          )} />
        </Switch>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return({
    users: state.users
  })
}

export default connect(mapStateToProps, { getUsers })(Users);
