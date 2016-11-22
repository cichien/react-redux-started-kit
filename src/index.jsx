import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

const reactElem = document.getElementById('app');

render(
  <h1>Hello world</h1>,
  reactElem
);
