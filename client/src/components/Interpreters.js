import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Interpreters = ({ interpreters }) => {
  const renderInterpreters = interpreters.map(interpreter =>
    <div key={interpreter.id}>
      <p>{interpreter.first_name + ' ' + interpreter.last_name}</p>
      <p>{interpreter.street_address}</p>
      <p>{interpreter.city + ', ' + interpreter.state + ' ' + interpreter.zip_code}</p>
      <p>Certifications: {interpreter.certifications.map(certification => <span className="Cert">{certification.name}</span>)}</p>
      <p>Rate: {'$' + interpreter.rate}</p>
    </div>
  )

  return (
    <div>
      <h1>Interpreters</h1>
      {renderInterpreters}
    </div>
  )
}

export default Interpreters;
