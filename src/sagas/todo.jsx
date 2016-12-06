import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';

import {
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAIL,
  fetchTodoApi,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  addTodoApi,
} from '../actions/todo';

export function* fetchTodo() {
  try {
    const data = yield call(fetchTodoApi);
    yield put({
      type: FETCH_TODO_SUCCESS,
      data,
    });
  } catch (e) {
    yield put({
      type: FETCH_TODO_FAIL,
    });
  }
}

export function* watchFetchTodo() {
  yield* takeLatest(FETCH_TODO, fetchTodo);
}

export function* addTodo(action) {
  try {
    yield call(addTodoApi, action.req);
    yield put({ type: ADD_TODO_SUCCESS });
    yield fork(fetchTodo);
  } catch (e) {
    yield put({ type: ADD_TODO_FAIL });
  }
}

export function* watchAddTodo() {
  yield* takeLatest(ADD_TODO, addTodo);
}
