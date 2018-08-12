import React from 'react';

const UserDetails = ({ user }) => (
    <div>
      <h3>{user.first_name + ' ' + user.last_name}</h3>
    </div>
)

export default UserDetails;
