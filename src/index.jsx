import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import getRoutes from './routers';

const routes = getRoutes();
const reactElem = document.getElementById('app');

render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  reactElem
);
