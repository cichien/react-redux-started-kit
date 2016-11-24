import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoInput from '../../components/TodoInput';

export const Todo = () => (
  <TodoInput />
);

Todo.PropTypes = {
  todo: PropTypes.shape({
    status: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
  }),
};

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
