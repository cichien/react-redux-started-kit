import React from 'react';
import { Route, IndexRoute } from 'react-router';

import TodosApp from './containers/TodosApp';
import Todo from './containers/Todo';

const routers = () => (
  <Route path="/" component={TodosApp}>
    <IndexRoute component={Todo} />
  </Route>
);

export default routers;
