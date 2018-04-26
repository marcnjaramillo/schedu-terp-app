import React from 'react';
import { Link } from 'react-router-dom';

const InterpreterPanel = ({ match, interpreter }) => (
  <Link key={interpreter.id} to={`${match.url}/${interpreter.id}`}>
    <div className="InterpreterPanel">
      <p>{interpreter.first_name + ' ' + interpreter.last_name}</p>
    </div>
  </Link>
)

export default InterpreterPanel;

// TODO: Figure out how to associate certification with an interpreter.
