import React from "react";

function Search(props) {
  return (
    <div className="Search">
      <h4>Movie Title</h4>
      <div className="searchWrapper">
        <i className="icon1" class="fas fa-search"></i>
        <input
          className="searchInput"
          type="text"
          onChange={(e) => {
            props.setSearchTerms(e.target.value);
            fetch(
              `https://www.omdbapi.com/?s=${e.target.value}&apikey=9cd31428&`
            )
              .then((res) => res.json())
              .then((data) => {
                if (data["Response"] === "True") {
                  props.setMovies(data["Search"]);
                } else {
                  props.setMovies([]);
                }
              });
          }}
        ></input>
      </div>
    </div>
  );
}

export default Search;
