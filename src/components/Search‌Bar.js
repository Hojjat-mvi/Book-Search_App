import { useState } from "react";

const SearchBar = ({ firstvalue, onSubmit }) => {
  const [title, settitle] = useState(firstvalue);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3 mt-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search your book name"
          value={title}
          onChange={(event) => {
            settitle(event.target.value);
          }}
        />

        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
