import React from 'react';

const InterpreterPanel = ({ interpreter }) => (
  <div className="InterpreterPanel">
    <p>{interpreter.first_name + ' ' + interpreter.last_name}</p>
  </div>
)

export default InterpreterPanel;

// TODO: Figure out how to associate certification with an interpreter.
