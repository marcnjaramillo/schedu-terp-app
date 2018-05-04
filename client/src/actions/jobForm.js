export const updateJobFormData = jobFormData => {
  return {
    type: 'UPDATED_JOB_DATA',
    jobFormData
  }
}

export const resetJobForm = () => {
  return {
    type: 'RESET_JOB_FORM'
  }
}
