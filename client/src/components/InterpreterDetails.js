import React from 'react';

const InterpreterDetails = ({ interpreter }) => (
    <div>
      <h3>{interpreter.first_name + ' ' + interpreter.last_name}</h3>
      <p>Address: {interpreter.street_address}</p>
      <p>{interpreter.city + ', ' + interpreter.state + ' ' + interpreter.zip_code}</p>
    </div>
)

export default InterpreterDetails;
