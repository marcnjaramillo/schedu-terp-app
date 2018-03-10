const API_URL = process.env.REACT_APP_API_URL;

const InterpreterData = {
  fetchInterpreters() {
    return fetch(`${API_URL}/interpreters`)
      .then(response => response.json())
  }
}

export default InterpreterData;
