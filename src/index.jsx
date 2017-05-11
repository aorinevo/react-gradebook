import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.css'

import reducers from './reducers';
import MainIndex from './components/main-index';
import GradebookIndex from './components/gradebook-index';

const createStoreWithMiddleware = applyMiddleware( promise )( createStore );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( reducers )}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/gradebook" component={ GradebookIndex }/>
          <Route path="/" component={ MainIndex }/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#wpbody-content'));
