import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookItem, addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [inputState, setInputState] = useState({
    title: '',
    author: '',
  });
  const handleAddBook = (e) => {
    e.preventDefault();
    if (inputState.title && inputState.author !== '') {
      dispatch(
        addBookItem({
          item_id: uuidv4(),
          title: inputState.title,
          author: inputState.author,
          category: 'Fiction',
        }),
      ).then(dispatch(addBook({
        item_id: uuidv4(),
        title: inputState.title,
        author: inputState.author,
        category: 'Fiction',
      })));
    }
    setInputState({
      title: '',
      author: '',
    });
  };
  const handleOnChange = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <form className="form-container" onSubmit={handleAddBook}>
        <h3 className="form-title">ADD NEW BOOK</h3>
        <div className="inputs-wrap">
          <label htmlFor="title">
            <input
              className="input-title"
              type="text"
              name="title"
              value={inputState.title}
              required
              placeholder="title"
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="author">
            <input
              className="input-author"
              type="text"
              name="author"
              value={inputState.author}
              required
              placeholder="author"
              onChange={handleOnChange}
            />
          </label>
          <button type="submit" title="Add Book" className="btn">
            Add book
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
