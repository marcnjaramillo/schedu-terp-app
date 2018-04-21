import React from 'react';

import InterpreterPanel from '../components/InterpreterPanel';


const Interpreters = (props) => (
  <div className="InterpretersContainer">
    <h1>Interpreters</h1>
    {props.interpreters.map(interpreter => <InterpreterPanel key={interpreter.id} interpreter={interpreter} />)}
  </div>
);

export default Interpreters;
