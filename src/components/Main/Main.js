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
<ul className='list-group'>
{
    todos.map((todo, i) => (
        <li key={todo.id} className='list-group-item d-flex justify-content-between'>
    <span className={`${todo.status ? styles.done : ''}`}>
        {i + 1}. {todo.title}
            </span>
            <div className=''>
            <button type="submit" onClick={() => ChangeTodoStatus(todo.id)} className={'btn btn-success'}>Пометить</button>
            <button type="submit" onClick={() => DeleteTodo(todo.id)} className={'btn mx-2 btn-danger'}>Удалить</button>
            </div> 
        </li>
    ))
}
</ul>
        </main>
    );
}
export default Main;