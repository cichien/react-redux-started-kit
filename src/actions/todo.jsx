import fetchOpts from '../utils/fetchOpts';

export const FETCH_TODO = 'FETCH_TODO';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAIL = 'FETCH_TODO_FAIL';

export const fetchTodo = () => ({
  type: FETCH_TODO,
});

export const fetchTodoApi = () => (
  fetch('http://localhost:3000/todos')
    .then(res => res.json())
);

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';

export const addTodo = req => ({
  type: ADD_TODO,
  req,
});

export const addTodoApi = req => (
   fetch('http://localhost:3000/todos', fetchOpts('POST', req))
);
