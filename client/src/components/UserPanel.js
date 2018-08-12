import React from 'react';
import { Link } from 'react-router-dom';

const UserPanel = ({ match, user }) => (
  <Link key={user.id} to={`${match.url}/${user.id}`}>
    <div className="UserPanel">
      <p>{user.first_name + ' ' + user.last_name}</p>
    </div>
  </Link>
)

export default UserPanel;

// TODO: Figure out how to associate certification with an user.
