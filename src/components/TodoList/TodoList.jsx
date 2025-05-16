import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleTask } from '../redux/tasksSlice';
import { selectFilteredTasks } from '../redux/selectors';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <ul>
      {tasks.map(task => (
        <TodoListItem
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
