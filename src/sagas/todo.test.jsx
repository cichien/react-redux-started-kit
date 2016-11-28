import { expect } from 'chai';
import { take, call, put } from 'redux-saga/effects';

import * as todoAction from '../actions/todo';
import { watchFetchTodo, fetchTodo } from './todo';

describe('Sagas: todo', () => {
  it('should take on the FETCH_TODO action', () => {
    const iterator = watchFetchTodo();
    const actualYield = iterator.next().value;
    const expectedYield = take(todoAction.FETCH_TODO);
    expect(actualYield).to.deep.equal(expectedYield);
  });

  it('should succeed to fetch todo', () => {
    const iterator = fetchTodo();
    let data;
    const mockAction = {
      type: todoAction.FETCH_TODO_SUCCESS,
      data,
    };
    expect(iterator.next().value).to.deep.equal(call(todoAction.fetchTodoApi));
    expect(iterator.next().value).to.deep.equal(put(mockAction));
  });

  it('should failed to fetch todo', () => {
    const iterator = fetchTodo();
    const mockAction = {
      type: todoAction.FETCH_TODO_FAIL,
    };
    let error = new Error('Request timeout');
    expect(iterator.next().value).to.deep.equal(call(todoAction.fetchTodoApi));
    expect(iterator.throw(error).value).to.deep.equal(put(mockAction));
  });
});
