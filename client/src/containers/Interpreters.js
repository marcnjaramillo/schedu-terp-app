import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInterpreters } from '../actions/interpreters';

import InterpreterPanel from '../components/InterpreterPanel';



class Interpreters extends Component {

  componentDidMount() {
    this.props.getInterpreters()
  }

  render () {
    return (
      <div className="InterpretersContainer">
        <h1>Interpreters</h1>
        {this.props.interpreters.map(interpreter => <InterpreterPanel key={interpreter.id} interpreter={interpreter} />)}

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
