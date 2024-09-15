import React from "react";
import { useTodos } from "./components/customHooks/useTodos";
import {Footer} from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";


function App() {

  const {todos, AddNewTodo, DeleteTodo, ChangeTodoStatus, DeleteAllTodos} = useTodos()
  
  return (
    <div>
  <div className="container py-5">
<Header AddNewPost={AddNewTodo}/>
<hr/>
<Main ChangeTodoStatus={ChangeTodoStatus} DeleteTodo={DeleteTodo} todos={todos}/>
<hr/>
<Footer DeleteAllTodos={DeleteAllTodos} todos={todos} />
</div>
</div>
);
}

export default App;
