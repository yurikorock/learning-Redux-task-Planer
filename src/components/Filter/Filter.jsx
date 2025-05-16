import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter('all'))}
        disabled={currentFilter === 'all'}
      >
        Усі
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        disabled={currentFilter === 'active'}
      >
        Активні
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        disabled={currentFilter === 'completed'}
      >
        Виконані
      </button>
    </div>
  );
};

export default Filter;
