import React from 'react';

export const Footer = ({DeleteAllTodos, todos}) => {
    return (
        <footer className="d-flex flex-column align-items-center">
    <button 
        className='btn btn-danger'
        disabled={!todos.length} 
        onClick={() => DeleteAllTodos()} >
            Удалить все
    </button>
        </footer>
    );
};