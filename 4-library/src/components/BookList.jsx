import Book from "./Book";

export default function BookList({ books, deleteBook, onEdit}) {
  return (
    <section id="grid">
      {books.map((b) => (
        <Book
          key={b.id}
          id={b.id}
          title={b.title}
          author={b.author}
          alreadyRead={b.alreadyRead}
          imageUrl={b.imageUrl}
          largeImageUrl={b.largeImageUrl}
          deleteBook={deleteBook}
          onEdit={() => onEdit(b)}
        />
      ))}
    </section>
  );
}
