import React, { useState } from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Main component of the application
function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo to the list
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to toggle the completion status of a todo
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  // Function to remove a todo from the list
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Render the main UI
  return (
    <div className="container backChange">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
