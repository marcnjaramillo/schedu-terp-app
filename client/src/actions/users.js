import { resetUserForm } from './userForm';

const API_URL = process.env.REACT_APP_API_URL;

const setUsers = users => {
  return {
    type: 'GET_USERS_SUCCESS',
    users
  }
}

const addUser = user => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

const deleteUser = id => {
  return {
    type: 'DELETE_USER_SUCCESS',
    id: id
  }
}

export const getUsers = () => {
  return dispatch => {
    return fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(users => dispatch(setUsers(users)))
      .catch(error => console.log(error));
  }
}

export const createUser = user => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addUser(user))
        dispatch(resetUserForm())
      })
      .catch(error => console.log(error))
  }
}

export const removeUser = user => {
  return dispatch => {
    return fetch(`${API_URL}/users/${user.id}`, {
      method: "DELETE"
    })
      .then(user => {
        dispatch(deleteUser())
      })
      .catch(error => console.log(error))
  }
}
