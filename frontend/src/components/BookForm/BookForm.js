import { useState } from 'react';
import './BookForm.css';
import { useDispatch } from 'react-redux';
import * as actionCreators from '..//../redux/books/actionCreators';
import booksData from '../../data/books.json';
import createBookWithId from '../../utils/createBookWithId';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = createBookWithId({ title, author });
      dispatch(actionCreators.addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    dispatch(actionCreators.addBook(createBookWithId(booksData[randomIndex])));
  };

  return (
    <div className="app-block book-form">
      <h2>Добавление книги</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Название: </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author">Автор: </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Добавить книгу</button>
        <button type="button" onClick={handleAddRandomBook}>
          Добавить случайную книгу
        </button>
      </form>
    </div>
  );
}

export default BookForm;
