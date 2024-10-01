import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext || todoContext.todos.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul className="todo-list">
      {todoContext.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
