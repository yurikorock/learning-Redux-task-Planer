import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            text={todo.text}
            id={todo.id}
            count={index + 1}
            onDelete={onDelete}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
