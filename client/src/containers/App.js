import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Interpreters from './Interpreters';
import './App.css';

const Home = () => <h1>Welcome to ScheduTerp</h1>;


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/interpreters">Interpreters</Link>
            <Link to="/interpreters/new">Add An Interpreter</Link>
          </div>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/interpreters" component={Interpreters} />
        </div>
      </Router>
    );
  }
}

export default App;
