import React, { Component } from 'react';
import Interpreters from './Interpreters';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>ScheduTerp</h1>
        <div className="Interpreters">
          <Interpreters />
        </div>

      </div>
    );
  }
}

export default App;
