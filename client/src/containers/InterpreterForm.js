import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateInterpreterFormData } from '../actions/interpreterForm';
import { createInterpreter } from '../actions/interpreters';

class InterpreterForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentInterpreterFormData = Object.assign({}, this.props.interpreterFormData, {
      [name]: value
    })
    this.props.updateInterpreterFormData(currentInterpreterFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createInterpreter(this.props.interpreterFormData)
    window.location = '/interpreters'
  }

  render () {
    const { first_name, last_name, street_address, city, state, zip_code } = this.props.interpreterFormData;

    return (
      <div>
        Add an interpreter
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="first_name"
              value={first_name}
            />
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="last_name"
              value={last_name}
            />
          </div>
          <div>
            <label htmlFor="street_address">Street Address:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="street_address"
              value={street_address}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="city"
              value={city}
            />
            <label htmlFor="state">State:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="state"
              value={state}
            />
            <label htmlFor="zip_code">Zip Code:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="zip_code"
              value={zip_code}
            />
          </div>
          <button type="submit">Add Interpreter</button>
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

export default connect(mapStateToProps, {
  updateInterpreterFormData,
  createInterpreter
})(InterpreterForm);
