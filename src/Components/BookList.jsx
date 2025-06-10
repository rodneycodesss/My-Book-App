import React from 'react';
import BookItem from './BookItem';

function BookList({ books, onBookClick }) {
  if (!books.length) return <p>No books found.</p>;
  return (
    <div style={{ width: '100%' }}>
      <ul
        className="book-list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          justifyContent: 'center',
        }}
      >
        {books.map((book, idx) => (
          <BookItem key={idx} book={book} onClick={onBookClick} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;