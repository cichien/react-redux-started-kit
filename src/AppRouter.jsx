import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { fetchTodo } from './actions/todo';
import TodosApp from './components/TodosApp';
import Todo from './containers/Todo';

const AppRouter = ({ actions }) => (
  <Router history={browserHistory}>
    <Route
      path="/"
      component={TodosApp}
      onEnter={actions.fetchTodo}
    >
      <IndexRoute component={Todo} />
    </Route>
  </Router>
);
AppRouter.propTypes = {
  actions: PropTypes.shape({
    fetchTodo: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchTodo,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
