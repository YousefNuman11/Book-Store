const BookCard = ({ book, deleteBook, startEdit }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card shadow h-100">
        {book.image && (
          <img
            src={book.image}
            className="card-img-top"
            alt={book.title}
            style={{ height: "180px", objectFit: "cover" }}
          />
        )}

        <div className="card-body">
          <h5>{book.title}</h5>

          <p className="mb-1">
            Author: {book.author}
          </p>

          <p className="text-success">
            ${book.price}
          </p>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => startEdit(book)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;