import React, { useEffect } from "react";
import Modal from "./Modal";

function SearchResults(props) {
  function nominateMovie(movie) {
    if (props.nominations.length < 5) {
      props.setNominations([...props.nominations, movie]);
    }
  }

  function selectMovie(movie) {
    props.setSelectedMovie(movie);
    props.setModal(true);
  }

  useEffect(() => {
    console.log("search Results", props.selectedMovie);
  });

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
                <span className="movie" onClick={() => selectMovie(movie)}>
                  {movie["Title"]}({movie["Year"]})
                </span>
                <button
                  id="nominateButton"
                  onClick={() => nominateMovie(movie)}
                  disabled={props.nominations.includes(movie)}
                >
                  Nominate
                </button>
              </li>
            </ul>
            {props.modal === true ? (
              <Modal
                className="modal"
                modal={props.modal}
                setModal={props.setModal}
                selectedMovie={props.selectedMovie}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
