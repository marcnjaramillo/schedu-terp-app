const API_URL = process.env.REACT_APP_API_URL;

const setInterpreters = interpreters => {
  return {
    type: 'GET_INTERPRETERS_SUCCESS',
    interpreters
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
