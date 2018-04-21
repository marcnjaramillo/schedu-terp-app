import React, { Component } from 'react';
import Interpreters from './Interpreters';
import InterpreterData from '../components/InterpreterData';
import Jobs from './Jobs';
import JobData from '../components/JobData';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interpreters: [],
      jobs: []
    }
  }

  componentDidMount() {
    InterpreterData.fetchInterpreters().then(interpreters => this.setState({ interpreters }))
    JobData.fetchJobs().then(jobs => this.setState({ jobs }))
  }

  render() {
    return (
      <div className="App">
        <h1>ScheduTerp</h1>
        <div className="Interpreters">
          <Interpreters interpreters={this.state.interpreters} />
        </div>
        <div className="Jobs">
          <Jobs jobs={this.state.jobs} />
        </div>
      </div>
    );
  }
}

export default App;
