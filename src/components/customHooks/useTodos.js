import { useEffect, useState } from 'react';
import { TODOS_KEY_LS } from '../utils/constant';


export const useTodos = () => {

      const [todos, setTodos] = useState([])
      
      useEffect(() => {
        const FromData = localStorage.getItem(TODOS_KEY_LS)
        const prepareTodos = FromData ? JSON.parse(FromData) : []

        if (prepareTodos.length) {
          setTodos(prepareTodos)
        } 
      }, [])

      useEffect(() => {
        localStorage.setItem(TODOS_KEY_LS, JSON.stringify(todos))
      }, [todos])
      
      
      const AddNewTodo = (title) =>  {
        const newTodo = {
          title, 
          id: Date.now(),
          status: false,
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


    return {
      todos,
      AddNewTodo,
      DeleteTodo,
      ChangeTodoStatus,
      DeleteAllTodos
    }
    };
