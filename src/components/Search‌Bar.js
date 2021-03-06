import { useState } from "react";

const SearchBar = ({ firstValue, onSubmit }) => {
  const [title, setTitle] = useState(firstValue);

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
            setTitle(event.target.value);
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
