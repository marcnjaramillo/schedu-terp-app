import React from 'react';

import JobPanel from '../components/JobPanel';

const Jobs = (props) => (
  <div className="JobsContainer">
    <h1>Jobs</h1>
    {props.jobs.map(job => <JobPanel key={job.id} job={job} />)}
  </div>
)

export default Jobs;
