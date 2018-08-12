import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import users from './reducers/users';
import userFormData from './reducers/userFormData';
import jobs from './reducers/jobs';
import jobFormData from './reducers/jobFormData';


const reducers = combineReducers({
  users,
  userFormData,
  jobs,
  jobFormData
});

const middleWare = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleWare)
);
