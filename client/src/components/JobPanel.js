import React from 'react';
import { Link } from 'react-router-dom';

const JobPanel = ({ match, job }) => (
  <Link key={job.id} to={`${match.url}/${job.id}`}>
    <div className="JobPanel">
      <p>{job.location}</p>
    </div>
  </Link>
);

export default JobPanel;
