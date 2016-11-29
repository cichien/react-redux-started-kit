import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { fetchTodo } from './actions/todo';
import TodosApp from './components/TodosApp';
import Todo from './containers/Todo';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.routeInit = this.routeInit.bind(this);
  }

  routeInit() {
    const { fetchTodoAction } = this.props.actions;
    fetchTodoAction();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route
          path="/"
          component={TodosApp}
          onEnter={this.routeInit}
        >
          <IndexRoute component={Todo} />
        </Route>
      </Router>
    );
  }
}

AppRouter.propTypes = {
  actions: PropTypes.shape({
    fetchTodoAction: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchTodoAction: fetchTodo,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
