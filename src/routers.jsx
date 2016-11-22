import React from 'react';
import { Route } from 'react-router';

import HelloWorld from './components/HelloWorld';

const routers = () => (
  <Route path="/" component={HelloWorld} />
);

export default routers;
