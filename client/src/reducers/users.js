export default (state = [], action) => {
  switch(action.type) {
    case 'GET_USERS_SUCCESS':
      return action.users;

    case 'CREATE_USER_SUCCESS':
      return state.concat(action.user);

    case 'DELETE_USER_SUCCESS':
      const userId = action.data;
      return  state.filter(user => user.id !== userId);

    default:
      return state;
  }
}
