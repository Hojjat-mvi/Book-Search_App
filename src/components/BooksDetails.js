import React from "react";

const BooksDetails = ({ selectedBooks }) => {
  if (!selectedBooks) {
    return <div className="alert alert-warning">select your book</div>;
  }

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={selectedBooks.imageLinks.thumbnail}
        alt="cover"
      />
      <div className="card-body">
        <h3 className="card-title">{selectedBooks.title}</h3>
        <p className="card-text">{selectedBooks.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          categories : {selectedBooks.categories}
        </li>
        <li className="list-group-item">authors : {selectedBooks.authors}</li>
        <li className="list-group-item">{selectedBooks.pageCount} pages</li>
      </ul>
    </div>
  );
};

export default BooksDetails;
