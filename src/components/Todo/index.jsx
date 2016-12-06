import React, { PropTypes } from 'react';

import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';

const Todo = ({ actions, todo }) => (
  <div>
    <TodoInput addTodo={actions.addTodo} />
    <TodoList listInfo={todo.data} />
  </div>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }),
  actions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
  }),
};

export default Todo;
