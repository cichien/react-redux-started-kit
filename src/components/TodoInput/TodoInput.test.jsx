import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import TodoInput from './';

describe('Components: TodoInput', () => {
  const props = {
    addTodo: sinon.spy(),
  }
  const  wrapper = mount(
    <TodoInput {...props}/>
  );


  it('should have a <from> tag', () => {
    expect(wrapper.find('form').length).to.equal(1);
  });

  it('should have a <Input> tag', () => {
    expect(wrapper.find('input').length).to.equal(1);
  });

  it('should call onTodoSubmit on form submission', () => {
    expect(wrapper.props().addTodo).to.be.defined;
    wrapper.simulate('submit');
    expect(props.addTodo.calledOnce).to.equal(true);
  });
});
