import React from 'react';
import styles from './styles.module.css'

export const TodoItem = (id, title, status, inx, DeleteTodo, ChangeTodoStatus) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
        <span className={`${status ? styles.done : ''}`}>
            {inx + 1}. {title}
                </span>
                <button type="submit" onClick={() => ChangeTodoStatus(id)} className={'btn btn-success'}>Пометить</button>
                <button type="submit" onClick={() => DeleteTodo(id)} className={'btn mx-2 btn-danger'}>Удалить</button>
            </li>
    );
};
