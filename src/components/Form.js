import React from 'react';

function Form() {
  return (
    <>
      <form>
        <h3>book title</h3>
        <div className="inputs-wrap">
          <label htmlFor="title">
            <input type="text" id="title" required placeholder="Book title" />
          </label>
          <label htmlFor="author">
            <input type="text" id="author" required placeholder="author" />
          </label>
          <button type="submit">Add book</button>
        </div>
      </form>
    </>
  );
}

export default Form;
