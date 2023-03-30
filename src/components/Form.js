import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = ({ onAddBook }) => {
  const handleAddBook = () => {
    onAddBook();
  };

  return (
    <form>
      <Input
        type="text"
        placeholder="title"
        name="title"
        value="title"
        onChange={(e) => onTitleChange(id, e.target.value)}
      />
      <Input
        type="text"
        placeholder="author"
        name="author"
        value="author"
        onChange={(e) => onAuthorChange(id, e.target.value)}
      />
      <Button title="Add Book" className="btn" onClick={handleAddBook} />
    </form>
  );
};

export default Form;
