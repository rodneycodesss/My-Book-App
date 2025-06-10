import React, { useEffect, useState } from 'react'
import './index.css'
import BookList from './components/BookList'
import BookModal from './components/BookModal'

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('classic')
  const [error, setError] = useState(null)
  const [dark, setDark] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
  }, [dark]);

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`)
      .then(res => res.json())
      .then(data => {
        setBooks(
          data.docs.map(book => ({
            title: book.title,
            author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
            year: book.first_publish_year,
            cover_i: book.cover_i,
            subject: book.subject ? book.subject.slice(0, 5) : null,
            publisher: book.publisher ? book.publisher.slice(0, 2) : null,
          }))
        )
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch books.')
        setLoading(false)
      })
  }, [query])

  return (
    <>
      <nav className="navbar">
        <h2>My Book App</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <form
            onSubmit={e => {
              e.preventDefault()
              setQuery(e.target.elements.search.value)
            }}
          >
            <input
              type="text"
              name="search"
              placeholder="Search books..."
            />
            <button type="submit">
              Search
            </button>
          </form>
          <button
            className="dark-toggle"
            onClick={() => setDark(d => !d)}
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
          >
            {dark ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
      <section className="hero">
        <h1>Welcome to My Book App</h1>
        <p>Discover and explore a curated list of books from our site.</p>
      </section>
      <div className="app">
        <h1>Book List</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <BookList books={books} onBookClick={setSelectedBook} />
        )}
      </div>
      <footer className="footer">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <div>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 0.5rem' }}>
              GitHub
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 0.5rem' }}>
              Twitter
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', margin: '0 0.5rem' }}>
              Facebook
            </a>
          </div>
          <div>
            <a href="#" style={{ color: '#fff', margin: '0 0.5rem' }}>Home</a>
            <a href="#" style={{ color: '#fff', margin: '0 0.5rem' }}>About</a>
            <a href="#" style={{ color: '#fff', margin: '0 0.5rem' }}>Contact</a>
          </div>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>
            &copy; {new Date().getFullYear()} My Book App. All rights reserved.
          </p>
        </div>
      </footer>
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </>
  )
}

export default App
