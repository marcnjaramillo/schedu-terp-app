import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Jobs = ({ jobs }) => {
  const renderJobs = jobs.map(job =>
    <div key={job.id}>
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
  )

  return (
    <div>
      <h1>Jobs</h1>
      {renderJobs}
    </div>
  )
}

export default Jobs;
