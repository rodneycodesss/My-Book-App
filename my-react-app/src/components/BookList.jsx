import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville' },
  ];

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <BookItem title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;