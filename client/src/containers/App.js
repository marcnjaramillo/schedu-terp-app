import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../components/Home';
import Interpreters from './Interpreters';
import Jobs from './Jobs';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/interpreters">Interpreters</Link>
            <Link to="/interpreters/new">Add An Interpreter</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/jobs/new">Add A Job</Link>
          </div>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/interpreters" component={Interpreters} />
          <Route path="/jobs" component={Jobs} />
        </div>
      </Router>
    );
  }
}

export default App;
