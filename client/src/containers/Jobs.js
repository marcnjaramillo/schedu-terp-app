import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import JobPanel from '../components/JobPanel';
import JobForm from './JobForm';
import Job from './Job';
import { getJobs } from '../actions/jobs';
import './Jobs.css';


class Jobs extends Component {

  componentDidMount() {
    this.props.getJobs()
  }

  render () {
    const { match, jobs } = this.props;

    return (
      <div>
        <Switch>
          <Route path={`${match.url}/new`} component={JobForm} />
          <Route path={`${match.url}/:jobId`} component={Job} />

          <Route exact path={`${match.url}`} render={() => (
            <div className="JobsContainer">
              <h1>Jobs</h1>
              {jobs.map(job => <JobPanel key={job.id} match={match} job={job} />)}
            </div>
          )} />
        </Switch>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return({
    jobs: state.jobs
  })
}

export default connect(mapStateToProps, { getJobs })(Jobs);
