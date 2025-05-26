import { useState, useEffect } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";

export default function BookDashboard() {
  // States

  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  // Effects for Fetch from API

  useEffect(() => {
    (async function fetchBooks() {
      try {
        const response = await fetch("https://my-json-server.typicode.com/Zesenem/library-api/db");
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    })();
  }, []);

  // Functions

  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };

  // Render

  return (
    <>
      <h1>My Library</h1>
      {editingBook && (
        <BookForm
          initialData={editingBook}
          onSave={(book) => {
            setBooks((prev) => prev.map((b) => (b.id === book.id ? book : b)));
            setEditingBook(null);
          }}
          onCancel={() => setEditingBook(null)}
        />
      )}
      <BookList books={books} deleteBook={deleteBook} onEdit={setEditingBook} />
    </>
  );
}
