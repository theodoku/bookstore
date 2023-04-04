import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => ({ ...state, categories: action.payload }),
    checkStatus: (state) => ({ ...state, status: 'Under construction' }),
  },
});

export const { setCategories, checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
