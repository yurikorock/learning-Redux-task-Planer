import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TaskForm from './components/TaskForm/TaskForm';
import FilterButtons from './components/FilterButtons/FilterButtons';
import TodoList from './components/TodoList/TodoList';

export const App = () => {
  return (
    <div>
      <h1>Список задач</h1>
      <FilterButtons />
      <TaskForm />
      <TodoList />
      {/* тут згодом буде TaskList */}
    </div>
  );
};
