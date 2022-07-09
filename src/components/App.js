import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState, useEffect } from "react";

import SearchBar from "./Search‌Bar";
import BooksDetails from "./BooksDetails";
import BooksList from "./BooksList";
import { Loading } from "./Loading/Loading";

const App = () => {
  const [bookResponse, setbookResponse] = useState({
    books: [],
    loading: false,
    error: null,
  });
  const [selectedBooks, setselectedBooks] = useState(null);
  const firstvalue = "javascript";

  const search = async (title) => {
    setbookResponse({ ...bookResponse, loading: true });
    try {
      var request = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}`
      );
      setbookResponse({
        ...bookResponse,
        books: request.data.items,
        loading: false,
        error: null,
      });

      setselectedBooks(request.data.items[0].volumeInfo);
    } catch (e) {
      setbookResponse({
        ...bookResponse,
        books: [],
        loading: false,
        error: "error",
      });

      setselectedBooks(null);
    }
  };

  const onBookClick = (book) => {
    setselectedBooks(book);
  };

  useEffect(() => {
    search(firstvalue);
  }, []);


  const contentshow = () => {
    const { books, error, loading } = bookResponse;
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
      <SearchBar onSubmit={search} firstvalue={"javascript"} />
      {contentshow()}
    </div>
  );
};

export default App;
