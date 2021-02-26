import React, { useState } from 'react'

function TodoForm(props) {
    // useState gets a current state and then updates it. 
    // the default value of useState can be saved as 0, [], ''
    const [input, setInput] = useState('');

    // a function that handles change in the form
    // handleChange function takes in a paramater "e" 
    const handleChange = e => {
        // sets the value in the input box to updated state
        setInput(e.target.value);
    };

    // the function that handles submit when a button is presseds
    // the handleSubmit function prevents the page from reloading every time the button is pressed
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        // after a change to the to do task is made reset the updated state to an empty string
        setInput('');
    };

    return (

        <form className='todo-form'
            // need to specify what we want the button to do when form is submitted
            onSubmit={handleSubmit}>
            {/* input tag */}
            <input type='text'
                placeholder='Add a todo'
                // value entered in the box/ current state
                value={input}
                name='text'
                className='todo-input'
                // a function that handles change
                onChange={handleChange}>
            </input>
            <button className='todo-btn'>Add To Do</button>
        </form>
    )
}

export default TodoForm
