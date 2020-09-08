import React, { useState, useEffect } from "react";
import "../App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";
import Alert from "./Alert";
import Modal from "./Modal";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [nominations, setNominations] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  return (
    <div>
      <div className="alertWrapper">
        {nominations.length === 5 ? <Alert className="Alert" /> : ""}
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
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            modal={modal}
            setModal={setModal}
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
