import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import interpreters from './reducers/interpreters';
import interpreterFormData from './reducers/interpreterFormData';
import jobs from './reducers/jobs';
import jobFormData from './reducers/jobFormData';


const reducers = combineReducers({
  interpreters,
  interpreterFormData,
  jobs,
  jobFormData
});

const middleWare = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
);
