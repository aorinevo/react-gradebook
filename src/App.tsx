import { Component } from 'react';
import * as React from 'react';
//import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as promise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import * as $ from 'jquery';
//import * as Bootstrap from 'bootstrap/dist/js/bootstrap';

import reducers from './reducers';
import CourseListIndex from './containers/course-list/course-list-index';
import CourseEditIndex from './containers/courses/course-edit-index';
import CourseDeleteIndex from './containers/courses/course-delete-index';
import StudentAddIndex from './containers/students/student-add-index';
import StudentEditIndex from './containers/courses/course-edit-index';
import StudentDeleteIndex from './containers/courses/course-delete-index';
import AssignmentAddIndex from './containers/assignments/assignment-add-index';
import GradebookIndex from './containers/gradebook/gradebook-index';

const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

class App extends Component {
render() {
    return (
    <Provider store={createStoreWithMiddleware( reducers )}>
        <BrowserRouter>
          <div>
            <Switch>          
              <Route path="/courses/:id/edit" component={ CourseEditIndex } />
              <Route path="/courses/:id/delete" component={ CourseDeleteIndex } />
              <Route path="/courses/:id/add" component={ CourseEditIndex } />          
              <Route path="/gradebook/:id/student/add" component={ StudentAddIndex } />
              <Route path="/gradebook/:id/student/delete" component={ StudentDeleteIndex } />
              <Route path="/gradebook/:id/student/edit" component={ StudentEditIndex } />
              <Route path="/gradebook/:id/assignment/add" component={ AssignmentAddIndex } />
              <Route path="/gradebook/:id" component={ GradebookIndex } />
              <Route path="/" component={ CourseListIndex }/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;


