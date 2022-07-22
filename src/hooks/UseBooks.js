import { useState, useEffect } from "react";
import axios from "axios";

const UseBooks = (title) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async (title) => {
    try {
      setLoading(true);
      const request = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${title}`
      );
      setLoading(false);
      setBooks(request.data.items);
      setError("");
    } catch (e) {
      setLoading(false);
      setBooks([]);
      setError(e.message);
    }
  };

  useEffect(() => {
    search(title);
  }, [title]);

  return [loading, error, books, search];
};

export default UseBooks;
