import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

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
      title: this.textInput.value,
      done: false,
    });

    this.textInput.value = '';
  }

  getTextInput(elem) {
    this.textInput = elem.input;
  }

  render() {
    return (
      <form onSubmit={this.onTodoSubmit}>
        <TextField
          hintText="New Todo"
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
