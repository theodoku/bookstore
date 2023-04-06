import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import URL from '../../Utility/constants';

export const fetchBooks = createAsyncThunk(
  'bookstore/books/fetch',
  async () => {
    const resp = await axios(URL);
    const data = await resp.data;
    return Object.keys(data).map((id) => ({
      item_id: id,
      title: data[id][0].title,
      author: data[id][0].author,
      category: data[id][0].category,
    }));
  },
);

export const addBookItem = createAsyncThunk(
  'bookstore/books/add',
  async (payload) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return payload;
  },
);

export const removeBookItem = createAsyncThunk(
  'bookstore/books/remove',
  async (payload) => {
    await fetch(`${URL}/${payload}`, {
      method: 'DELETE',
    });
    return payload;
  },
);
const initialState = {
  books: [],
};
const booksSlice = createSlice({
  name: 'bookstore/books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
      }))
      .addCase(addBookItem.fulfilled, (state, book) => (state.books.push(book)))
      .addCase(removeBookItem.fulfilled, (state, action) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== action.payload),
      }));
  },
});
export const { addBook } = booksSlice.actions;
export { booksSlice };
