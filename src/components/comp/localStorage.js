import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { TODOS_KEY_LS } from '../content';


const Ls = () => {
    const [todos, setTodos] = useState([])

      useEffect(() => {
        const todosFromLS = localStorage.getItem(TODOS_KEY_LS)
        const prepareTodos = todosFromLS ? JSON.parse(todosFromLS) : []
    
        if (prepareTodos.length) {
        setTodos(prepareTodos)
        }
      }, [])
    
      useEffect(() => {
    localStorage.setItem(TODOS_KEY_LS, JSON.stringify(todos))
      }, [todos])
      
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
      
      const DeleteAllTodos = () => {
        setTodos([])
      }
    return (
        <div>
      <div className="container py-5">
<Header AddNewPost={AddNewPost}/>
<hr/>
<Main ChangeTodoStatus={ChangeTodoStatus} DeleteTodo={DeleteTodo} todos={todos}/>
<hr/>
<Footer DeleteAllTodos={DeleteAllTodos} />
</div>
    </div>
    );
};

export default Ls;