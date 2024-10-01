import React from 'react';
import './styles/App.css';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>My To-Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;

