import React from "react";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { useTodos } from "./components/customHooks/useTodos";

function App() {
  const { todos, AddNewTodo, DeleteTodo, ChangeTodoStatus, DeleteAllTodos } =
    useTodos();

  return (
    <div>
      <div className="container py-5">
        <Header AddNewTodo={AddNewTodo} />
        <hr />
        <Main
          todos={todos}
          ChangeTodoStatus={ChangeTodoStatus}
          DeleteTodo={DeleteTodo}
        />
        <hr />
        <Footer DeleteAllTodos={DeleteAllTodos} todos={todos} />
      </div>
    </div>
  );
}

export default App;
