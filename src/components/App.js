import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import SearchBar from "./Search‌Bar";
import BooksDetails from "./BooksDetails";
import BooksList from "./BooksList";
import { Loading } from "./Loading/Loading";
import UseBooks from "../hooks/UseBooks";

const App = () => {
  const [loading, error, books, search] = UseBooks("javascript");
  const [selectedBooks, setSelectedBooks] = useState(null);

  const onBookClick = (book) => {
    setSelectedBooks(book);
  };

  useEffect(() => {
    if (books.length) setSelectedBooks(books[0].volumeInfo);
  }, [books]);

  const contentShow = () => {
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }

    return (
      <div className="row ">
        <div className="col-8">
          <BooksDetails selectedBooks={selectedBooks} />
        </div>
        <div className="col-4">
          <BooksList books={books} onBookClick={onBookClick} />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <SearchBar onSubmit={search} firstValue={"javascript"} />
      {contentShow()}
    </div>
  );
};

export default App;
