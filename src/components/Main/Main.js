import React from 'react';
import styles from './main.module.css'


const Main = ({todos, ChangeTodoStatus, DeleteTodo}) => {
    if (!todos.length) {
        return (
            <div className={styles.mainHeading}>
            <p>Список пуст...</p>
            </div>
        )
    }
    return (
        <main>
<ul className="list-group">
    {
        todos.map((todo, i) => (
            <li key={todo.id} className="list-group-item">
                <span className={`${todo.status ? styles.done : ''}`}>
                {i + 1}. {todo.title}
                </span>

  <button type="submit" onClick={() => DeleteTodo(todo.id)} className={'btn btn-danger d-flex flex-column align-items-center'}>Удалить</button>
  <button type="submit" onClick={() => ChangeTodoStatus(todo.id)} className={'btn btn-success'}>Пометить</button></li>
        ))
    }
</ul>
        </main>
    );
};

export default Main;