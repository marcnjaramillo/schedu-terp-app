import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeJob } from '../actions/jobs';
import JobDetails from '../components/JobDetails';

class Job extends Component {

  handleOnClick = job => {
    this.props.removeJob(job)
    window.location = '/jobs'
  }

  render() {

    const { job } = this.props;

    return (
      <div>
        <JobDetails key={job.id} job={job} />
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
