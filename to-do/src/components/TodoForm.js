import React, { useState } from 'react'

function TodoForm() {
    // useState gets a current state and then updates it. 
    // the default value of useState can be saved as 0, [], ''
    const [input, setInput] = useState('');
    return (
        <form className='todo-form'> 
            <input type='text' 
            placeholder='Add a todo' 
            value={input} 
            name='text' 
            className='todo-input'>
            </input>
            <button className='todo-btn'>Add To Do</button>
        </form>
    )
}

export default TodoForm
