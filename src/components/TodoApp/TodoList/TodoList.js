import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ tasks, deleteTask, toggleTaskCompletion }){
  if (!tasks || !Array.isArray(tasks)){
    return <div>No tasks available</div>;
  }

  return (
    <div className="todo-list">
      {tasks.map((task, index)=>(
        <TodoItem
          key={index}
          index={index}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
}

export default TodoList;