import React from 'react';
import { Route, IndexRoute } from 'react-router';

import TodosApp from './containers/TodosApp';
import HelloWorld from './components/HelloWorld';

const routers = () => (
  <Route path="/" component={TodosApp}>
    <IndexRoute component={HelloWorld} />
  </Route>
);

export default routers;
