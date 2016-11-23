import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

import createLogger from 'redux-logger';
import createSaga from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

const saga = createSaga();
const logger = createLogger();
const middleware = [saga];
let finalCreateStore;

if (__DEVELOPMENT__) {
  middleware.push(logger);
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
} else {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
  );
}

const configureStore = (initialState) => {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    finalCreateStore,
  );
  saga.run(sagas);
  return store;
};

export default configureStore;
