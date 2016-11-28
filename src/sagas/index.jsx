import { watchFetchTodo } from './todo';

export default function* rootSaga() {
  yield [
    watchFetchTodo(),
  ];
}
