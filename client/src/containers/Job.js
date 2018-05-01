import React from 'react';
import { connect } from 'react-redux';

const Job = ({ job }) => {

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
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {

  const job = state.jobs.find(job => job.id === parseInt(ownProps.match.params.jobId))

  if (job) {
    return { job }
  } else {
    return { job: {} }
  }
}

export default connect(mapStateToProps)(Job);
