export default function Book(props) {
  const { id, title, author, alreadyRead, imageUrl, largeImageUrl, deleteBook } = props;

  return (
    <article className="card">
      <h2 className="book-title">{title}</h2>
      <h3 className="book-author">{author}</h3>

      <img className="book-image" src={imageUrl} alt={title} />

      <p className="read-status">{alreadyRead ? "✔️ Already read" : "❌ Not read yet"}</p>
      <div className="btn-container">
        <button className="btn delete" onClick={() => deleteBook(id)}>
          Delete
        </button>
        <button className="btn edit" onClick={props.onEdit}>
          Edit
        </button>
      </div>
    </article>
  );
}
