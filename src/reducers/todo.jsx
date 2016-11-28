import {
  FETCH_TODO,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAIL,
} from '../actions/todo';

const initialState = {
  status: 'default',
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return Object.assign({}, state, {
        status: 'loading',
      });
    case FETCH_TODO_SUCCESS:
      return Object.assign({}, state, {
        status: 'loaded',
        data: action.data,
      });
    case FETCH_TODO_FAIL:
      return Object.assign({}, state, {
        status: 'failed',
      });
    default:
      return state;
  }
};

export default reducer;
