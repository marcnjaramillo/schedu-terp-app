const initialState = {
  location: '',
  street_address: '',
  city: '',
  state: '',
  zip_code: '',
  contact_person: '',
  contact_number: '',
  nature: '',
  duration: 0,
  client: '',
  notes: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.jobFormData;

    case 'RESET_JOB_FORM':
      return initialState;

    default:
      return state;
  }
}
