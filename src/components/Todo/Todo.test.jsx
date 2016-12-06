import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Todo from './';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

describe('Components: Todo', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      todo: {
        status: 'default',
        data: [],
      },
      actions: {
        addTodo: () => {},
      },
    };

    wrapper = mount(
      <Todo {...props} />
    );
  });

  it('should have a <TodoInput>', () => {
    expect(wrapper.find(TodoInput)).to.have.length(1);
    expect(wrapper.contains(<TodoInput addTodo={props.actions.addTodo} />)).to.equal(true);
  });

  it('should have a <TodoList>', () => {
    expect(wrapper.find(TodoList)).to.have.length(1);
    expect(wrapper.contains(<TodoList listInfo={props.todo.data} />)).to.equal(true);
  });

  it('should have props for todo', () => {
    expect(wrapper.props().todo).to.be.defined;
  });
});
