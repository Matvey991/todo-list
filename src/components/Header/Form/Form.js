import React, { useState } from 'react';

const Form = ({AddNewPost}) => {

  const [input, setInput] = useState('')

  const addSubmit = (e) => {
    e.preventDefault()
    
    if (input) {
      AddNewPost(input)
      setInput('')
    }
  }

    return (
<form onSubmit={addSubmit} className="d-flex flex-column align-items-center">
  <div className='mb-3'>
    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Title...' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
  <button type="submit" className="btn btn-primary">Add</button>
</form>
    );
  }
export default Form; 