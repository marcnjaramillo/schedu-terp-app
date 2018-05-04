import { resetInterpreterForm } from './interpreterForm';

const API_URL = process.env.REACT_APP_API_URL;

const setInterpreters = interpreters => {
  return {
    type: 'GET_INTERPRETERS_SUCCESS',
    interpreters
  }
}

const addInterpreter = interpreter => {
  return {
    type: 'CREATE_INTERPRETER_SUCCESS',
    interpreter
  }
}

const deleteInterpreter = id => {
  return {
    type: 'DELETE_INTERPRETER_SUCCESS',
    id: id
  }
}

export const getInterpreters = () => {
  return dispatch => {
    return fetch(`${API_URL}/interpreters`)
      .then(response => response.json())
      .then(interpreters => dispatch(setInterpreters(interpreters)))
      .catch(error => console.log(error));
  }
}

export const createInterpreter = interpreter => {
  return dispatch => {
    return fetch(`${API_URL}/interpreters`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ interpreter: interpreter })
    })
      .then(response => response.json())
      .then(interpreter => {
        dispatch(addInterpreter(interpreter))
        dispatch(resetInterpreterForm())
      })
      .catch(error => console.log(error))
  }
}

export const removeInterpreter = interpreter => {
  return dispatch => {
    return fetch(`${API_URL}/interpreters/${interpreter.id}`, {
      method: "DELETE"
    })
      .then(interpreter => {
        dispatch(deleteInterpreter())
      })
      .catch(error => console.log(error))
  }
}
