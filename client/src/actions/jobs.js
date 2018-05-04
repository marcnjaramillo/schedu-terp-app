import { resetJobForm } from './jobForm';

const API_URL = process.env.REACT_APP_API_URL;

const setJobs = jobs => {
  return {
    type: 'GET_JOBS_SUCCESS',
    jobs
  }
}

const addJob = job => {
  return {
    type: 'CREATE_JOB_SUCCESS',
    job
  }
}

const deleteJob = id => {
  return {
    type: 'DELETE_JOB_SUCCESS',
    id: id
  }
}

export const getJobs = () => {
  return dispatch => {
    return fetch(`${API_URL}/jobs`)
      .then(response => response.json())
      .then(jobs => dispatch(setJobs(jobs)))
      .catch(error => console.log(error));
  }
}

export const createJob = job => {
  return dispatch => {
    return fetch(`${API_URL}/jobs`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ job: job })
    })
      .then(response => response.json())
      .then(job => {
        dispatch(addJob(job))
        dispatch(resetJobForm())
      })
      .catch(error => console.log(error))
  }
}

export const removeJob = job => {
  return dispatch => {
    return fetch(`${API_URL}/jobs/${job.id}`, {
      method: "DELETE"
    })
      .then(job => {
        dispatch(deleteJob())
      })
      .catch(error => console.log(error))
  }
}
