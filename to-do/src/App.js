
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>
        <TodoList />
        <TodoForm />
      </h1>
    </div>
  );
}

export default App;
