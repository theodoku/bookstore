import React, { useState } from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

const initialBooks = [
  { id: 1, title: 'The Hunger Games', author: 'Suzanne Collins' },
];

const Books = () => {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = () => {
    setBooks([...books, { id: books.length + 1, title: '', author: '' }]);
  };

  const handleTitleChange = (id, value) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, title: value } : book
      )
    );
  };

  const handleAuthorChange = (id, value) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, author: value } : book
      )
    );
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          onDelete={handleDeleteBook}
          onTitleChange={handleTitleChange}
          onAuthorChange={handleAuthorChange}
        />
      ))}
      <button onClick={handleAddBook}>Add Book</button>
      <Form onAddBook={handleAddBook} />
    </div>
  );
};

export default Books;

