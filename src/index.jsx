import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.css';
import * as $ from 'jquery';
import * as Bootstrap from 'bootstrap/dist/js/bootstrap';

import reducers from './reducers';
import CourseListIndex from './components/course-list/course-list-index';
import GradebookIndex from './components/gradebook/gradebook-index';

const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( reducers )}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/gradebook/:id" component={ GradebookIndex }/>
          <Route path="/" component={ CourseListIndex }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#wpbody-content'));
