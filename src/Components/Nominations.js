import React from "react";

function Nominations(props) {
  function removeNomination(movie) {
    props.setNominations(props.nominations.filter((nom) => nom != movie));
  }
  return (
    <div className="Nominations">
      <h3>Nominations</h3>
      <ul>
        {props.nominations.map((movie) => {
          return (
            <li>
              {movie["Title"]} ({movie["Year"]})
              <button onClick={() => removeNomination(movie)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nominations;
