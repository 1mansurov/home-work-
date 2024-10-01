import React, { useContext } from 'react';
import { Todo } from '../types/Todo';
import { TodoContext } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) return null;

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => todoContext.toggleTodo(todo.id)}>
        {todo.text}
      </span>
      <button onClick={() => todoContext.removeTodo(todo.id)} className="remove-btn">X</button>
    </li>
  );
};

export default TodoItem;
