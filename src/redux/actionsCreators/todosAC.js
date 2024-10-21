import {
  ADD_TODO,
  CHANGE_STATUS_TODO,
  CLEAR_TODOS,
  DELETE_TODO,
} from "../types/todosTypes";

export const addNewTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    status: false,
    title,
  },
});

export const deleteTodoAC = (id) => ({
  type: DELETE_TODO,
  payload: {
    id: Date.now(),
  },
});

export const changeStatusTodoAC = (id) => ({
  type: CHANGE_STATUS_TODO,
  payload: {
    id: Date.now(),
  },
});

export const CLEAR_COUNTER = () => ({
  type: CLEAR_TODOS,
});
