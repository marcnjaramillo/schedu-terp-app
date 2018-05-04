export default (state = [], action) => {
  switch(action.type) {
    case 'GET_INTERPRETERS_SUCCESS':
      return action.interpreters;

    case 'CREATE_INTERPRETER_SUCCESS':
      return state.concat(action.interpreter);

    case 'DELETE_INTERPRETER_SUCCESS':
      const interpreterId = action.data;
      return  state.filter(interpreter => interpreter.id !== interpreterId);

    default:
      return state;
  }
}
