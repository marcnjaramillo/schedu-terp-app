import React from 'react';

const JobPanel = ({ job }) => (
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

export default JobPanel;
