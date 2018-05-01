export default (state = [], action) => {
  switch(action.type) {
    case 'GET_JOBS_SUCCESS':
      return action.jobs;

    case 'CREATE_JOB_SUCCESS':
      return state.concat(action.job);

    default:
      return state;
  }
}
