import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

const Todos = () => {
  // const todos = [
  //   { id: '1', text: 'Practice more' },
  //   { id: '2', text: 'Get all tasks done on time' },
  // ];

  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem('todos');
    return saveTodos ? JSON.parse(saveTodos) : [];
  });

  const addNewTodo = newTodo => {
    setTodos(prevTodos => {
      return [...prevTodos, { text: newTodo, id: nanoid() }];
    });
  };
  const deleteTodo = todoId => {
    setTodos(prevTodo => {
      return prevTodo.filter(todo => todo.id !== todoId);
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
