function BookItem({ title, author }) {
  return (
    <div className="book-item">
      <h3>{title}</h3>
      <p>by {author}</p>
    </div>
  );
}

export default BookItem;