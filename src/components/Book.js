import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookItem } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.books.find((book) => book.item_id === id));

  if (!book) {
    return null;
  }

  return (
    <li>
      <div className="Book">
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <button type="button">comment</button>
          <button type="button" onClick={() => dispatch(removeBookItem(id))}>
            remove
          </button>
          <button type="button">edit</button>
        </div>
        <div className="Book-Status">
          <div className="status">
            <div className="status-bar">
              <div className="status-bar-inner" />
            </div>
            <div className="percentage">
              <h3>64%</h3>
              <p>completed</p>
            </div>
          </div>
          <div className="chapter">
            <h3>current chapter</h3>
            <h3>chapter 17</h3>
            <button type="button">update progress</button>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
