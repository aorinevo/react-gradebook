import { combineReducers } from 'redux';
import CoursesReducer from './reducer-courses';
import GradebookReducer from './reducer-gradebook';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  courses: CoursesReducer,
  gradebook: GradebookReducer,
  form: formReducer
});

export default rootReducer;
