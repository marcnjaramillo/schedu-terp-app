const API_URL = process.env.REACT_APP_API_URL;

const JobData = {
  fetchJobs() {
    return fetch(`${API_URL}/jobs`)
      .then(response => response.json())
  }
}

export default JobData;
