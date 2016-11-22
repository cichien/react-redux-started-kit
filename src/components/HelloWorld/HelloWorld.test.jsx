import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import HelloWorld from './';

describe('Components:HelloWorld', () => {
  const wrapper = render(
    <HelloWorld/>
  );

  it('should have a <h1> tag', () => {
    expect(wrapper.find('h1').length).to.equal(1);
  });

  it('should have a title which is called Hello World', () => {
    expect(wrapper.find('h1').text()).to.equal('Hello World');
  });
});
