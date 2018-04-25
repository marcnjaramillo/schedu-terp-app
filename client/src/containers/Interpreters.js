import React, { Component } from 'react';
import { connect } from 'react-redux';

import InterpreterPanel from '../components/InterpreterPanel';
import InterpreterForm from './InterpreterForm';
import { getInterpreters } from '../actions/interpreters';
import './Interpreters.css';


class Interpreters extends Component {

  componentDidMount() {
    this.props.getInterpreters()
  }

  render () {
    return (
      <div className="InterpretersContainer">
        <h1>Interpreters</h1>
        {this.props.interpreters.map(interpreter => <InterpreterPanel key={interpreter.id} interpreter={interpreter} />)}
        <InterpreterForm/>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return({
    interpreters: state.interpreters
  })
}

export default connect(mapStateToProps, { getInterpreters })(Interpreters);
