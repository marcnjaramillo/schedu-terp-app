import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import interpreters from './reducers/interpreters';


const reducers = combineReducers({
  interpreters
});

const middleWare = [thunk];

export default createStore(
  reducers,
  window.__REDUX__DEVTOOLS__EXTENSION__ && window.__REDUX__DEVTOOLS__EXTENSION__(),
  applyMiddleware(...middleWare)
);
