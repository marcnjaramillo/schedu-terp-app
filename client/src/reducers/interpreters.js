export default (state = [], action) => {
  switch(action.type) {
    case 'GET_INTERPRETERS_SUCCESS':
      return action.interpreters;

    case 'CREATE_INTERPRETER_SUCCESS':
      return state.concat(action.interpreter);

    default:
      return state;
  }
}
