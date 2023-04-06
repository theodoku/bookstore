import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './books/booksSlice';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    categories: categoriesReducer,
  },
});

export default store;
