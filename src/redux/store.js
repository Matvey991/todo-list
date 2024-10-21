import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducers";

const initialState = {
  todos: [],
  counter: 0,
};

export const store = createStore(rootReducer, initialState);
