import BookCard from "./BookCard";

const BookList = ({ books, deleteBook, startEdit }) => {
  if (books.length === 0) {
    return <p className="text-center">No books found.</p>;
  }

  return (
    <div className="row">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          deleteBook={deleteBook}
          startEdit={startEdit}
        />
      ))}
    </div>
  );
};

export default BookList;