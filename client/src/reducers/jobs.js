export default (state = [], action) => {
  switch(action.type) {
    case 'GET_JOBS_SUCCESS':
      return action.jobs;

    case 'CREATE_JOB_SUCCESS':
      return state.concat(action.job);

    case 'DELETE_JOB_SUCCESS':
      const jobId = action.data;
      return  state.filter(job => job.id !== jobId);

    default:
      return state;
  }
}
