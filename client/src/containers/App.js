import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Home from '../components/Home';
import Users from './Users';
import Jobs from './Jobs';
import './App.css';

class App extends Component {

constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false
  };
}

toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}

render() {
  return (
      <Router>
        <div className="App">
          <Navbar color="dark" dark expand="lg">
            <NavbarBrand href="/">ScheduTerp</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto mr-4" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                  </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Users
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink tag={Link} to="/users">Users</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to="/users/new">Add A User</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Assignments
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <NavLink tag={Link} to="/jobs">Jobs</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink tag={Link} to="/jobs/new">Add A Job</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
              </Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/jobs" component={Jobs} />
        </div>
      </Router>
    );
  }
}

export default App;
