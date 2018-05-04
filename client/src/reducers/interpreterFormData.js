const initialState = {
  first_name: '',
  last_name: '',
  street_address: '',
  city: '',
  state: '',
  zip_code: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_INTERPRETER_DATA':
      return action.interpreterFormData;

    case 'RESET_INTERPRETER_FORM':
      return initialState;

    default:
      return state;
  }
}
