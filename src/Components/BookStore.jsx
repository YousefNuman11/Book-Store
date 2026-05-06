import { useEffect, useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import SearchBar from "./SearchBar";

const BookStore = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const [editingBook, setEditingBook] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const clearAll = () => {
    setBooks([]);
  };

  const startEdit = (book) => {
    setEditingBook(book);
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map(book =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );

    setEditingBook(null);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📚 Book Store CRUD</h2>

      <div className="d-flex justify-content-end mb-2">
        <button className="btn btn-dark btn-sm" onClick={clearAll}>
          Clear All
        </button>
      </div>

      <BookForm
        addBook={addBook}
        editingBook={editingBook}
        updateBook={updateBook}
      />

      <SearchBar search={search} setSearch={setSearch} />

      <BookList
        books={filteredBooks}
        deleteBook={deleteBook}
        startEdit={startEdit}
      />
    </div>
  );
};

export default BookStore;