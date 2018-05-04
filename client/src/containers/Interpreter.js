import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeInterpreter } from '../actions/interpreters';
import InterpreterDetails from '../components/InterpreterDetails';

class Interpreter extends Component {

  handleOnClick = interpreter => {
    this.props.removeInterpreter(interpreter)
    window.location = '/interpreters'
  }

  render () {
    const { interpreter } = this.props;

    return (
      <div>
        <InterpreterDetails key={interpreter.id} interpreter={interpreter} />
        <button onClick={() => this.handleOnClick(interpreter)}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const interpreter = state.interpreters.find(interpreter => interpreter.id === parseInt(ownProps.match.params.interpreterId))

  if (interpreter) {
    return { interpreter }
  } else {
    return { interpreter: {} }
  }
}

export default connect(mapStateToProps, { removeInterpreter })(Interpreter);
