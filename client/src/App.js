import React, { Component } from 'react';
import Interpreters from './components/Interpreters';
import InterpreterData from './components/InterpreterData';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      interpreters: []
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
      </div>
    );
  }
}

export default App;
