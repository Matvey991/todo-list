import { TodoItem } from "../TodoItem/TodoItem"


export const TodoList = ({todos, ChangeTodoStatus, DeleteTodo}) => {
    return (
    <ul className="list-group">
        {
        todos.map((todo, i) => 
        <TodoItem
        key={todo.id} 
        {...todo} 
        i={i} 
        ChangeTodoStatus={ChangeTodoStatus} 
        DeleteTodo={DeleteTodo}
        />)
        }
    </ul>
)

}