import React from 'react';

function BookItem({ book, onClick }) {
  return (
    <li
      className="book-item"
      onClick={() => onClick(book)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 150,
        cursor: 'pointer',
        background: 'var(--book-bg, #f9f9f9)',
        borderRadius: 8,
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'background 0.2s'
      }}
    >
      {book.cover_i ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
          style={{ width: 90, height: 130, objectFit: 'cover', borderRadius: 4, marginBottom: 8 }}
        />
      ) : (
        <div
          className="no-cover"
          style={{
            width: 90,
            height: 130,
            background: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            color: '#aaa',
            fontSize: 13,
            marginBottom: 8
          }}
        >
          No Cover
        </div>
      )}
      <div className="book-item-details" style={{ textAlign: 'center' }}>
        <div className="book-item-title" style={{ fontWeight: 'bold', fontSize: 15 }}>{book.title}</div>
        <div className="book-item-author" style={{ color: '#555', fontSize: 13 }}>{book.author}</div>
        <div className="book-item-year" style={{ color: '#888', fontSize: 12 }}>{book.year ? `First published: ${book.year}` : ''}</div>
      </div>
    </li>
  );
}

export default BookItem;