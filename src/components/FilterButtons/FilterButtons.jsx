import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice.js';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.filter);

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button
        onClick={() => handleFilterChange('all')}
        disabled={currentFilter === 'all'}
      >
        Всі
      </button>
      <button
        onClick={() => handleFilterChange('active')}
        disabled={currentFilter === 'active'}
      >
        Активні
      </button>
      <button
        onClick={() => handleFilterChange('completed')}
        disabled={currentFilter === 'completed'}
      >
        Виконані
      </button>
    </div>
  );
};

export default FilterButtons;
