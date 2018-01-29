import Project from './ProjectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  project: Project
});


export default rootReducer;
