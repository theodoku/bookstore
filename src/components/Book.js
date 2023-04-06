import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookItem } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(64);
  const book = useSelector((state) => state.books.books.find((book) => book.item_id === id));

  if (!book) {
    return null;
  }

  const handleProgress = () => {
    let newPercentage = percentage;
    if (percentage < 100) {
      newPercentage += 2;
    }
    setPercentage(newPercentage);
  };

  return (
    <li>
      <div className="Book">
        <span className="category">{category}</span>
        <h3 className="Title">{title}</h3>
        <span className="Author">{author}</span>
        <div className="book-btn">
          <button type="button">Comment</button>
          <button type="button" onClick={() => dispatch(removeBookItem(id))}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="Book-Status">
        <div className="oval-progress">
          <CircularProgressbar className="Oval" value={percentage} />
          <div className="text-percentage">
            <span className="percentage-completed">
              {percentage}
              %
            </span>
            <span className="text-completed">Completed</span>
          </div>
        </div>
        <div className="chapter-progress">
          <span className="current-chapter">Current Chapter</span>
          <span className="chapter">Chapter 17</span>
          <button
            className="update-progress"
            type="button"
            onClick={handleProgress}
          >
            UPDATE PROGRESS
          </button>
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
