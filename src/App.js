import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";


function App() {

const [todos, setTodos] = useState([{
  title: 'Задача', 
  id: Date.now(),
  status: true
}])

function AddNewPost(title)  {
  const newTodo = {
    title, 
    id: Date.now(),
    status: false
  }

setTodos(prev => [newTodo, ...prev])
}


const DeleteTodo = (id) => {
  setTodos(prev => prev.filter((todo) => todo.id !== id))
}

const ChangeTodoStatus = (id) => {
  setTodos(prev => prev.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
      status: !todo.status
      }
    }
    return todo
  }) 
  )
}

  return (
    <div className="App">
<Header AddNewPost={AddNewPost}/>
<hr/>
<Main ChangeTodoStatus={ChangeTodoStatus} DeleteTodo={DeleteTodo} todos={todos}/>
<hr/>
<Footer/>
    </div>
  );
}

export default App;
