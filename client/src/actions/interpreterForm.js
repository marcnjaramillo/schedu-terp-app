export const updateInterpreterFormData = interpreterFormData => {
  return {
    type: 'UPDATED_INTERPRETER_DATA',
    interpreterFormData
  }
}

export const resetInterpreterForm = () => {
  return {
    type: 'RESET_INTERPRETER_FORM'
  }
}
