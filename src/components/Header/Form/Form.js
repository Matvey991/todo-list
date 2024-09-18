import React, { useState } from "react"
import styles from './styles.module.scss'

export const Form = ( {AddNewTodo, closeHandler} ) => {
  
  const [input, setInput] = useState('')
    
  const addSubmit = (e) => {
    e.preventDefault()
    
    if (input) {
      AddNewTodo(input)
      setInput('')
      closeHandler()
    }
  }

    return (
<form onSubmit={addSubmit} className={`d-flex flex-column align-items-center ${styles.wr }`}>
  <p className="text-center mb-3">Create todo</p>
<div className="mb-3"> 
    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Title...' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
  <button type="submit" className="btn btn-primary">Добавить</button>
</form>
    );
  }
export default Form; 