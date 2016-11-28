import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAIL,
  fetchTodoApi,
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
