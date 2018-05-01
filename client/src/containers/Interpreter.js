import React from 'react';
import { connect } from 'react-redux';

const Interpreter = ({ interpreter }) => {

  return (
    <div>
      <h3>{interpreter.first_name + ' ' + interpreter.last_name}</h3>
      <p>Address: {interpreter.street_address}</p>
      <p>{interpreter.city + ', ' + interpreter.state + ' ' + interpreter.zip_code}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {

  const interpreter = state.interpreters.find(interpreter => interpreter.id === parseInt(ownProps.match.params.interpreterId))

  if (interpreter) {
    return { interpreter }
  } else {
    return { interpreter: {} }
  }
}

export default connect(mapStateToProps)(Interpreter);
