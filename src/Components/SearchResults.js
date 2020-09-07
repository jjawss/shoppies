import React from "react";
import Alert from "./Alert";

function SearchResults(props) {
  function nominateMovie(movie) {
    if (props.nominations.length < 5) {
      props.setNominations([...props.nominations, movie]);
    }
  }

  return (
    <div className="SearchResults">
      {props.searchTerms.length > 0 ? (
        <h3>Results for "{props.searchTerms}"</h3>
      ) : (
        <h3>Results</h3>
      )}
      {props.movies.map((movie) => {
        return (
          <div>
            <ul>
              <li>
                {movie["Title"]} ({movie["Year"]})
                <button
                  id="nominateButton"
                  onClick={() => nominateMovie(movie)}
                  disabled={props.nominations.includes(movie)}
                >
                  Nominate
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
