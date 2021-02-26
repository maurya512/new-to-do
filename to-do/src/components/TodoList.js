import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([])

    // the function that lets us add todo list
    const addTodo = todo => {
        // checks for any white space
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        
        // adds new "todo" and spreads already added "todos" into "newTodos"
        const newTodos = [todo, ...todos]

        // updates the state by setting it as the "newTodo"
        setTodos(newTodos) 
    }

    return (
        <div>
            {/* defining what needs to be done when a change occurs */}
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList;
