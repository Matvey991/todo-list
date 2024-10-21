import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer/counterReducer";
import { todosReducer } from "./todosReducer/todosReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
});
