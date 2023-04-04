import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState({
    title: '',
    author: '',
  });

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook(
      {
        item_id: uuidv4(),
        title: inputState.title,
        author: inputState.author,
        category: 'Fiction',
      },
    ));

    setInputState({
      title: '',
      author: '',
    });
  };

  const handleOnChange = (e) => {
    setInputState((prevState) => ({
      ...prevState, [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <form onSubmit={handleAddBook}>
        <h3>ADD NEW BOOK</h3>
        <div className="inputs-wrap">
          <label htmlFor="title">
            <input type="text" name="title" value={inputState.title} required placeholder="title" onChange={handleOnChange} />
          </label>
          <label htmlFor="author">
            <input type="text" name="author" value={inputState.author} required placeholder="author" onChange={handleOnChange} />
          </label>
          <button type="submit" title="Add Book" className="btn">Add book</button>
        </div>
      </form>
    </>
  );
};

export default Form;
