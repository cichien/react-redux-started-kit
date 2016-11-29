import React, { PropTypes } from 'react';

const TodoList = ({ listInfo }) => {
  const itemList = listInfo.map((todoItems, key) => (
    <li key={key}>
      <span>{todoItems.title}</span>
    </li>
  ));

  return (
    <ul>
      {itemList}
    </ul>
  );
};

TodoList.propTypes = {
  listInfo: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

export default TodoList;
