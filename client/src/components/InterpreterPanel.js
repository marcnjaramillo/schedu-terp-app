import React from 'react';

const InterpreterPanel = ({ interpreter }) => (
  <div>
    <p>{interpreter.first_name + ' ' + interpreter.last_name}</p>
    <p>{interpreter.street_address}</p>
    <p>{interpreter.city + ', ' + interpreter.state + ' ' + interpreter.zip_code}</p>
  </div>
)

export default InterpreterPanel;

// TODO: Figure out how to associate certification with an interpreter.
