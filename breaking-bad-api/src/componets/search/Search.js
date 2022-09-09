import React, { useState } from "react";
const Search = ({ getQuery }) => {
  const [name, setName] = useState("");

  const onChange = (q) => {
    setName(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeHolder="Search Characters"
          value={name}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default Search;
