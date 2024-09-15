import React, { useState } from 'react';

export const Form = ({AddNewTodo}) => {
  
  const [input, setInput] = useState('')
    
  const addSubmit = (e) => {
    e.preventDefault()
    
    if (input) {
      AddNewTodo(input)
      setInput('')
    }
  }

    return (
<form onSubmit={addSubmit} className="d-flex flex-column align-items-center">
<div className="formInput"> 
    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Title...' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div className='mt-3'>
  <button type="submit" className="btn btn-primary">Добавить</button>
  </div>
</form>
    );
  }
export default Form; 