export default (state = {
  first_name: '',
  last_name: '',
  street_address: '',
  city: '',
  state: '',
  zip_code: ''
}, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.interpreterFormData

    default:
      return state;
  }
}
