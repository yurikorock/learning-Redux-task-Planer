import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') return;

    dispatch(addTask(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введіть назву задачі"
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default TaskForm;
