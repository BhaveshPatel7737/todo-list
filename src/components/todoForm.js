import React, { useState } from 'react';

// Component for the form to add new todos
function TodoForm({ addTodo }) {
  // State to manage the input value
  const [value, setValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      text: value,
      isCompleted: false,
    });
    setValue(''); // Clear the input field after adding todo
  };

  // Render the form UI
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
        placeholder="Add a new task"
      />
      <button type="submit" className="btn btn-dark mt-2">Add</button>
    </form>
  );
}

export default TodoForm;
