import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";


function App() {

const [todos, setTodos] = useState([])

function AddNewPost(title)  {
  const newTodo = {
    title, 
    id: Date.now(),
    status: false
  }

setTodos(prev => [newTodo, ...prev])
}



  return (
    <div className="App">
<Header AddNewPost={AddNewPost}/>
<hr/>
<Main todos={todos}/>
<hr/>
<Footer/>
    </div>
  );
}

export default App;
