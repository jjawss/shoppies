import React, { useState, useEffect } from "react";
import "../App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";
import Alert from "./Alert";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [nominations, setNominations] = useState([]);
  const [alertBanner, setAlertBanner] = useState(false);

  return (
    <div>
      <div className="alertWrapper">
        {nominations.length === 5 ? (
          <Alert className="Alert" />
        ) : (
          console.log("hello")
        )}
      </div>
      <div className="App">
        <h1 className="header">The Shoppies</h1>
        <Search
          className="Search"
          movies={movies}
          setMovies={setMovies}
          searchTerms={searchTerms}
          setSearchTerms={setSearchTerms}
        />
        <div className="wrapper">
          <SearchResults
            movies={movies}
            setMovies={setMovies}
            searchTerms={searchTerms}
            nominations={nominations}
            setNominations={setNominations}
          />
          <Nominations
            nominations={nominations}
            setNominations={setNominations}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
