import React from 'react';
import { TodoList } from '../TodoList/Todolist';



const Main = ({todos, ChangeTodoStatus, DeleteTodo}) => {
    if (!todos.length) {
        return (
            <p>Список пуст...</p>
        )
    }
    return (
        <main>
{
    <TodoList todos={todos} ChangeTodoStatus={ChangeTodoStatus} DeleteTodo={DeleteTodo}/>
}
        </main>
    );
}
export default Main;