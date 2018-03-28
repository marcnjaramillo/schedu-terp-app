import React, { Component } from 'react';
import Interpreters from './components/Interpreters';
import InterpreterData from './components/InterpreterData';
import Jobs from './components/Jobs';
import JobData from './components/JobData';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      interpreters: [],
      jobs: []
    }
  }

  componentDidMount() {
    InterpreterData.fetchInterpreters().then(interpreters => this.setState({ interpreters }))
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
