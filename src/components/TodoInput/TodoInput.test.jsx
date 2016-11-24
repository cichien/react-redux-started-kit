import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import TodoInput from './';

describe('Components: TodoInput', () => {
  const wrapper = render(
    <TodoInput />
  );

  it('should have a <from> tag', () => {
    expect(wrapper.find('form').length).to.equal(1);
  });

  it('should have a <Input> tag', () => {
    expect(wrapper.find('input').length).to.equal(1);
  });
});
