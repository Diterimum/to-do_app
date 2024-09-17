import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
    </div>
  );
}

export default App;