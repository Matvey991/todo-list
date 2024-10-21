import { DECREMENT, INCREMENT } from "../types/counterTypes";
import { CLEAR_COUNTER } from "./todosAC";

export const incrementCounterAC = () => ({
  type: INCREMENT,
});

export const decrementCounterAC = () => ({
  type: DECREMENT,
});

export const clearCounterAC = () => ({
  type: CLEAR_COUNTER,
});
