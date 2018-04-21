import React from 'react';

const InterpreterPanel = ({ interpreter }) => (
  <div>
    <p>{interpreter.first_name + ' ' + interpreter.last_name}</p>
    <p>{interpreter.street_address}</p>
    <p>{interpreter.city + ', ' + interpreter.state + ' ' + interpreter.zip_code}</p>
    <p>Certifications: {interpreter.certifications.map(certification => <span className="Cert">{certification.name}</span>)}</p>
    <p>Rate: {'$' + interpreter.rate}</p>
  </div>
)

export default InterpreterPanel;
