import React from "react";

import Book from "./Book";

const BooksList = ({ books, onBookClick }) => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book.volumeInfo} onBookClick={onBookClick} />
      ))}
    </div>
  );
};

export default BooksList;
