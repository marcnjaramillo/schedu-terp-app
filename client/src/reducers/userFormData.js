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
    case 'UPDATED_USER_DATA':
      return action.userFormData;

    case 'RESET_USER_FORM':
      return initialState;

    default:
      return state;
  }
}
