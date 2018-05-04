import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeJob } from '../actions/jobs';

class Job extends Component {

  handleOnClick = job => {
    this.props.removeJob(job)
    window.location = '/jobs'
  }

  render() {

    const { job } = this.props;

    return (
      <div>
        <p>{job.location}</p>
        <p>{job.street_address}</p>
        <p>{job.city + ', ' + job.state + ' ' + job.zip_code}</p>
        <p>{job.contact_person}</p>
        <p>{job.contact_number}</p>
        <p>{job.nature}</p>
        <p>{job.duration}</p>
        <p>{job.client}</p>
        <p>{job.notes}</p>
        <button onClick={() => this.handleOnClick(job)}>Delete</button>
      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => {

  const job = state.jobs.find(job => job.id === parseInt(ownProps.match.params.jobId))

  if (job) {
    return { job }
  } else {
    return { job: {} }
  }
}

export default connect(mapStateToProps, { removeJob })(Job);
