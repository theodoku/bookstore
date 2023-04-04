const ADD_BOOK_ITEM = 'ADD_BOOK_ITEM';
const REMOVE_BOOK_ITEM = 'REMOVE_BOOK_ITEM';

const addBookItem = (book) => ({
  type: ADD_BOOK_ITEM,
  payload: book,
});

const removeBookItem = (bookId) => ({
  type: REMOVE_BOOK_ITEM,
  payload: bookId,
});

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_ITEM:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK_ITEM:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export {
  ADD_BOOK_ITEM, REMOVE_BOOK_ITEM, addBookItem, removeBookItem, booksReducer,
};
