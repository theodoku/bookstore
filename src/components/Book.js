import React from 'react';

function Book() {
  return (
    <li>
      <div className="Book">
        <p>action</p>
        <h3>the hunger games</h3>
        <p>suzan colins</p>
        <div>
          <button type="button">comment</button>
          <button type="button">remove</button>
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
}

export default Book;
