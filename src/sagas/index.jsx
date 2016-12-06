import {
  watchFetchTodo,
  watchAddTodo,
} from './todo';

export default function* rootSaga() {
  yield [
    watchFetchTodo(),
    watchAddTodo(),
  ];
}
