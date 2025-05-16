import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all', // початковий фільтр — всі задачі
  reducers: {
    setFilter: (state, action) => action.payload, // змінює фільтр
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
