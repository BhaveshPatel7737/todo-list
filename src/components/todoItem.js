import React from 'react';

// Component for a single todo item
function TodoItem({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="d-flex align-items-center mb-2">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => completeTodo(index)}
        className="me-2"
      />
      <span className="flex-grow-1">{todo.text}</span>
      <button onClick={() => removeTodo(index)} className="btn btn-danger btn-sm">x</button>
    </div>
  );
}

export default TodoItem;
