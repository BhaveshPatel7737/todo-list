import React from 'react';
import TodoItem from './todoItem';
import Fade from 'react-bootstrap/Fade';

// Define the TodoList component
function TodoList({ todos, completeTodo, removeTodo }) {
  // Filter the todos array into uncompleted and completed tasks
  const uncompletedTodos = todos.filter(todo => !todo.isCompleted);
  const completedTodos = todos.filter(todo => todo.isCompleted);

  // Render the TodoList component
  return (
    <div>
      {/* Render the uncompleted tasks */}
      <h2>Uncompleted Tasks</h2>
      {uncompletedTodos.length > 0 ? (
        // If there are uncompleted tasks, map over them and render each TodoItem component
        uncompletedTodos.map((todo, index) => (
          // Wrap each TodoItem component in a Fade component for a fade-in effect
          <Fade in={true} appear={true} key={index}>
            <div>
              {/* Render the TodoItem component and pass the todo, index, and functions as props */}
              <TodoItem
                index={todos.indexOf(todo)} // Pass the original index
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            </div>
          </Fade>
        ))
      ) : (
        // If there are no uncompleted tasks, display a message
        <p>No uncompleted tasks</p>
      )}

      {/* Render the completed tasks */}
      <h2>Completed Tasks</h2>
      {completedTodos.length > 0 ? (
        // If there are completed tasks, map over them and render each TodoItem component
        completedTodos.map((todo, index) => (
          // Wrap each TodoItem component in a Fade component for a fade-in effect
          <Fade in={true} appear={true} key={index}>
            <div>
              {/* Render the TodoItem component and pass the todo, index, and functions as props */}
              <TodoItem
                index={todos.indexOf(todo)} // Pass the original index
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            </div>
          </Fade>
        ))
      ) : (
        // If there are no completed tasks, display a message
        <p>No completed tasks</p>
      )}
    </div>
  );
}

// Export the TodoList component
export default TodoList;
