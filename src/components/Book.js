import React from "react";

import noimage from "../asset/noimage.png";

const Book = ({ book, onBookClick }) => {
  const clickHandler = () => {
    onBookClick(book);
  };

  return (
    <div
      className="card mb-3"
      style={{ maxWidth: "540px" }}
      onClick={clickHandler}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={book.imageLinks ? book.imageLinks.smallThumbnail : noimage}
            className="img-fluid rounded-start"
            alt="cover"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">
              <small className="text-muted">{book.subtitle}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
