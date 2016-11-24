import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.getTextInput = this.getTextInput.bind(this);
  }

  getTextInput(elem) {
    this.textInput = elem;
  }

  render() {
    return (
      <form>
        <input
          type="text"
          ref={this.getTextInput}
        />
      </form>
    );
  }
}

export default TodoInput;
