import { expect } from 'chai';

import reducer from './';
import {
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAIL,
} from '../actions/todo';

const initialState = {
  status: 'default',
  data: [],
};

describe('Reducers:', () => {
  describe('todo', () => {
    it('handles FETCH_TODO', () => {
      const action = {
        type: FETCH_TODO,
      };
      const nextState = reducer.todo(initialState, action);
      expect(nextState).to.deep.equal({
        status: 'loading',
        data: [],
      });
    });

    it('handles FETCH_TODO_SUCCESS', () => {
      const action = {
        type: FETCH_TODO_SUCCESS,
        data: [{
          id: 1,
          done: true,
          title: 'Test A',
        }],
      };
      const nextState = reducer.todo(initialState, action);
      expect(nextState).to.deep.equal({
        status: 'loaded',
        data: [{
          id: 1,
          done: true,
          title: 'Test A',
        }],
      });
    });

    it('handles FETCH_TODO_FAIL', () => {
      const action = {
        type: FETCH_TODO_FAIL,
      };
      const nextState = reducer.todo(initialState, action);
      expect(nextState).to.deep.equal({
        status: 'failed',
        data: [],
      });
    });
  });
});
