import 'babel-polyfill';
// import fetch from 'isomorphic-fetch';
// import Promise from 'es6-promise';
// Promise.polyfill();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import AppRouter from './AppRouter';

const store = configureStore({});
const reactElem = document.getElementById('app');

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  reactElem
);
