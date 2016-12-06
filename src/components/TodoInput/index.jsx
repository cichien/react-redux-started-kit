import React, { Component, PropTypes } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.getTextInput = this.getTextInput.bind(this);
    this.onTodoSubmit = this.onTodoSubmit.bind(this);
  }

  onTodoSubmit(e) {
    const { addTodo } = this.props;
    e.preventDefault();

    addTodo({
      title: this.getTextInput.value,
      done: false,
    });

    this.getTextInput.value = '';
  }

  getTextInput(elem) {
    this.textInput = elem;
  }

  render() {
    return (
      <form onSubmit={this.onTodoSubmit}>
        <input
          type="text"
          ref={this.getTextInput}
        />
      </form>
    );
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoInput;
