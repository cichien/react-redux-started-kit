import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import TodosApp from './';

describe('Components:TodosApp', () => {
  const wrapper = render(
    <TodosApp/>
  );

  it('should have a <h1> tag title that be named "Todo List"', () => {
    expect(wrapper.find('h1').length).to.equal(1);
    expect(wrapper.find('h1').text()).to.equal('Todo List');
  });
});
