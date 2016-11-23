import React, { PropTypes } from 'react';

const TodosApp = ({ children }) => (
  <div>
    <h1>Todo List</h1>
    {children}
  </div>
);

TodosApp.propTypes = {
  children: PropTypes.node,
};

export default TodosApp;
