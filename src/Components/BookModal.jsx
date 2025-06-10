import React from 'react';

function BookModal({ book, onClose }) {
  if (!book) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} title="Close">&times;</button>
        {book.cover_i ? (
          <img
            className="modal-cover"
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt={book.title}
          />
        ) : (
          <div className="no-cover modal-cover">No Cover</div>
        )}
        <h2 style={{ marginTop: 0 }}>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        {book.year && <p><strong>First published:</strong> {book.year}</p>}
        {book.subject && <p><strong>Subjects:</strong> {book.subject.join(', ')}</p>}
        {book.publisher && <p><strong>Publisher:</strong> {book.publisher.join(', ')}</p>}
      </div>
    </div>
  );
}

export default BookModal;