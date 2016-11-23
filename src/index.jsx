import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './store';
import getRoutes from './routers';

const store = configureStore({});
const routes = getRoutes();
const reactElem = document.getElementById('app');

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  reactElem
);
