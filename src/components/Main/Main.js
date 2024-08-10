import React from 'react';
import styles from './main.module.css'


const Main = ({todos, ChangeTodoStatus, DeleteTodo}) => {
    return (
        <main>
<ul className="list-group">
    {
        todos.map((todo, i) => (
            <li key={todo.id} className="list-group-item">
                <span className={`${todo.status ? styles.done : ''}`}>
                {i + 1}. {todo.title}
                </span>
                <div className=''>

                </div>
  <button type="submit" onClick={() => DeleteTodo(todo.id)} className="btn btn-danger">Delete</button>
  <button type="submit" onClick={() => ChangeTodoStatus(todo.id)} className="btn btn-success">Done</button></li>
        ))
    }
</ul>
        </main>
    );
};

export default Main;