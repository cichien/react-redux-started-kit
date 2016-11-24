import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { Todo } from './';
import TodoInput from '../../components/TodoInput';

describe('Container: Todo', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      todo: {
        status: 'default',
        data: [],
      },
    };

    wrapper = mount(
      <Todo {...props} />
    );
  });

  it('should have a <TodoInput>', () => {
    expect(wrapper.find(TodoInput)).to.have.length(1);
    expect(wrapper.contains(<TodoInput />)).to.equal(true);
  });

  it('should have props for todo', () => {
    expect(wrapper.props().todo).to.be.defined;
  });
});
