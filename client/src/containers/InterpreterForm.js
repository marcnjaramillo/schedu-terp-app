import React, { Component } from 'react';
import { connect } from 'react-redux';

class InterpreterForm extends Component {
  render () {
    const { first_name, last_name, street_address, city, state, zip_code } = this.props.interpreterFormData;

    return (
      <div>
        Add an interpreter
        <form>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              name="first_name"
              value={first_name}
            />
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={last_name}
            />
          </div>
          <div>
            <label htmlFor="street_address">Street Address:</label>
            <input
              type="text"
              name="street_address"
              value={street_address}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              value={city}
            />
            <label htmlFor="state">State:</label>
            <input
              type="text"
              name="state"
              value={state}
            />
            <label htmlFor="zip_code">Zip Code:</label>
            <input
              type="text"
              name="zip code"
              value={zip_code}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    interpreterFormData: state.interpreterFormData
  })
}

export default connect(mapStateToProps)(InterpreterForm);
