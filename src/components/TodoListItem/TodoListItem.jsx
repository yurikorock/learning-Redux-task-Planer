import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/tasksSlice';

const TodoListItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
      <button onClick={handleToggle}>
        {completed ? 'Відмінити' : 'Виконано'}
      </button>
      <button onClick={handleDelete}>Видалити</button>
    </li>
  );
};

export default TodoListItem;
