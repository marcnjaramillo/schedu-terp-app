import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import InterpreterPanel from '../components/InterpreterPanel';
import InterpreterForm from './InterpreterForm';
import Interpreter from '../components/Interpreter';
import { getInterpreters } from '../actions/interpreters';
import './Interpreters.css';


class Interpreters extends Component {

  componentDidMount() {
    this.props.getInterpreters()
  }

  render () {
    const { match, interpreters } = this.props;

    return (
      <div>
        <Switch>
          <Route path={`${match.url}/new`} component={InterpreterForm} />
          <Route path={`${match.url}/:interpreterId`} component={Interpreter} />

          <Route exact path={`${match.url}`} render={() => (
            <div className="InterpretersContainer">
              <h1>Interpreters</h1>
              {interpreters.map(interpreter => <InterpreterPanel key={interpreter.id} match={match} interpreter={interpreter} />)}
            </div>
          )} />
        </Switch>
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
