import { combineReducers } from 'redux';
import errorReducer from './errorReducers';
import projectReducer from './projectReducers';
import backlogReducer from './backlogReducer';
import securityReducer from './securityReducer';

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  backlog: backlogReducer,
  security: securityReducer,
});
