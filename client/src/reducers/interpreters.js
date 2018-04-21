export default (state = [], action) => {
  switch(action.type) {
    case 'GET_INTERPRETERS_SUCCESS':
      return action.interpreters;

    default:
      return state;
  }
}
