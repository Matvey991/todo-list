import React from 'react';
import styles from './main.module.css'


const Main = ({todos, DeleteTodo}) => {
    return (
        <main>
<ul className="list-group">
    {
        todos.map((todo, i) => (
            <li key={todo.id} className="list-group-item">
                <span>
                {i + 1}. {todo.title}
                </span>
                <div className=''>

                </div>
  <button type="submit" onClick={() => DeleteTodo(todo.id)} className="btn btn-danger">Delete</button>
  <button type="submit" className="btn btn-success">Done</button></li>
        ))
    }
</ul>
        </main>
    );
};

export default Main;