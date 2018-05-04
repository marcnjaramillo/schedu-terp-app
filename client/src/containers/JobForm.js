import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateJobFormData } from '../actions/jobForm';
import { createJob } from '../actions/jobs';

class JobForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentJobFormData = Object.assign({}, this.props.jobFormData, {
      [name]: value
    })
    this.props.updateJobFormData(currentJobFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createJob(this.props.jobFormData)
    window.location = '/interpreters'
  }

  render () {
    const { location, street_address, city, state, zip_code, contact_person, contact_number, nature, duration, client, notes } = this.props.jobFormData;

    return (
      <div>
        Create a Job
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="location"
              value={location}
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
          <div>
            <label htmlFor="contact_person">Contact Person:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="contact_person"
              value={contact_person}
            />
            <label htmlFor="contact_number">Contact Number:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="contact_number"
              value={contact_number}
            />
            <label htmlFor="nature">Nature:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="nature"
              value={nature}
            />
          </div>
          <div>
            <label htmlFor="duration">Duration (in hours):</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="duration"
              value={duration}
            />
            <label htmlFor="client">Client:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="client"
              value={client}
            />
            <label htmlFor="notes">Notes:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="notes"
              value={notes}
            />
          </div>
          <button type="submit">Create Job</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    jobFormData: state.jobFormData
  })
}

export default connect(mapStateToProps, {
  updateJobFormData,
  createJob
})(JobForm);
