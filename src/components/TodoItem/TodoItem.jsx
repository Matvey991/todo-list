import todoItemStyles from "./styles.module.scss"

export const TodoItem = ( {id, title, status, i, DeleteTodo, ChangeTodoStatus} ) => {
    
 return (
    <li 
    className="list-group-item d-flex justify-content-between"
    >
        <span 
        className={`d-flex align-items-center 
            ${status ? todoItemStyles.done : ''}`}
            >
            {i + 1}. {title}
            </span>
        <div>
        <button 
        onClick={() => ChangeTodoStatus(id)} 
        type="button" 
        className="btn mx-2 btn-success"
        >
            Пометить
        </button>
        <button 
        onClick={() => DeleteTodo(id)} 
        type="button" 
        className="btn btn-danger" 
        >
            Удалить
            </button>
     
         </div> 
    </li>
 )   
}