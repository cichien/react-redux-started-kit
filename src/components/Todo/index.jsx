import React, { PropTypes } from 'react';

import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';

const Todo = ({ todo }) => (
  <div>
    <TodoInput />
    <TodoList listInfo={todo.data} />
  </div>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }),
};

export default Todo;
