export const updateJobFormData = jobFormData => {
  return {
    type: 'UPDATED_DATA',
    jobFormData
  }
}

export const resetJobForm = () => {
  return {
    type: 'RESET_JOB_FORM'
  }
}
