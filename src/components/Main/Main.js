import React from 'react';
import styles from './main.module.css'


const Main = ({todos}) => {
    return (
        <main>
<ul className="list-group">
    {
        todos.map(todo => (
            <li key={todo.id} className="list-group-item">{todo.title}</li>
        ))
    }
</ul>
        </main>
    );
};

export default Main;