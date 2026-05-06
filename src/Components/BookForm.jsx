import { useEffect, useState } from "react";

const BookForm = ({ addBook, editingBook, updateBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setPrice(editingBook.price);
      setImage(editingBook.image);
    }
  }, [editingBook]);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !price) return;

    const book = {
      id: editingBook ? editingBook.id : Date.now(),
      title,
      author,
      price,
      image,
    };

    if (editingBook) {
      updateBook(book);
    } else {
      addBook(book);
    }

    setTitle("");
    setAuthor("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="card shadow p-3 mb-4">
      <div className="row g-2">
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <input
            type="file"
            className="form-control"
            onChange={handleImage}
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-primary w-100">
            {editingBook ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookForm;