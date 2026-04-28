import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: inputValue
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      
      <form onSubmit={addTask} className="input-group">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className="todo-item">
            <span>{task.text}</span>
            <button onClick={() => removeTask(task.id)} className="remove-btn">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
