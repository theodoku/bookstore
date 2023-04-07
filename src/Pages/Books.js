import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { fetchBooks, removeBookItem } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const booksFromStore = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (id) => {
    dispatch(removeBookItem(id));
  };
  return (
    <ul className="booklist">
      {booksFromStore.books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          onClick={() => handleRemoveBook(book.id)}
        />
      ))}
    </ul>
  );
}
export default Books;
