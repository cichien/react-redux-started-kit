import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import TodoList from '../../components/TodoList';

describe('components: TodoList', () => {
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
      <TodoList {...props} />
    );
  });
});
