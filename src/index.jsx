import 'babel-polyfill';
import Promise from 'es6-promise';
// import fetch from 'isomorphic-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store';
import AppRouter from './AppRouter';

Promise.polyfill();
injectTapEventPlugin();

const store = configureStore({});
const reactElem = document.getElementById('app');

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </MuiThemeProvider>,
  reactElem
);
