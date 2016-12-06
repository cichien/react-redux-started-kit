import { expect } from 'chai';
import { take, call, put, fork } from 'redux-saga/effects';

import * as todoAction from '../actions/todo';
import {
  watchFetchTodo,
  fetchTodo,
  watchAddTodo,
  addTodo,
} from './todo';

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

  it('should take on the ADD_TODO action', () => {
    const iterator = watchAddTodo();
    const actualYield = iterator.next().value;
    const expectedYield = take(todoAction.ADD_TODO);
    expect(actualYield).to.deep.equal(expectedYield);
  });

  it('should succeed to add todo', () => {
    const action = {
      req: {
        text: 'TEST',
      },
    };
    const iterator = addTodo(action);
    const mockAction = {
      type: todoAction.ADD_TODO_SUCCESS,
    };
    expect(iterator.next().value).to.deep.equal(call(todoAction.addTodoApi, action.req));
    expect(iterator.next().value).to.deep.equal(put(mockAction));
    expect(iterator.next().value).to.deep.equal(fork(fetchTodo));
  });

  it('should failed to add todo', () => {
    const action = {
      req: {
        text: 'TEST',
      },
    };
    const iterator = addTodo(action);
    const mockAction = {
      type: todoAction.ADD_TODO_FAIL,
    };
    let error = new Error('Request timeout');
    expect(iterator.next().value).to.deep.equal(call(todoAction.addTodoApi, action.req));
    expect(iterator.throw(error).value).to.deep.equal(put(mockAction));
  });
});
