import React from 'react';
import './TodoItem.css';

function TodoItem({task, index, deleteTask, toggleTaskCompletion }){
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;