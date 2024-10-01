import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const todoContext = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && todoContext) {
      todoContext.addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
