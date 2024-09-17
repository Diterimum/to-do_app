import React, { useState } from 'react';
import TodoList from './TodoList/TodoList';
import './TodoApp.css';

function TodoApp(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask=()=>{
    if (newTask.trim()!==''){
      setTasks([...tasks, {text: newTask, completed: false}]);
      setNewTask('');
    }
  };

  const deleteTask=(index)=>{
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion=(index)=>{
    const updatedTasks=tasks.map((task, i)=>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return(
    <div className="todo-app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

export default TodoApp;