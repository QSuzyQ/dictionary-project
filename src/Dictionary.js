import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey = `563492ad6f9170000100000141a6ea591a984fc18821c572796cf82e`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What would you want to look up?</h1>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              />
            </form>
            <div className="hint">
              suggested words: love, peace, sea, life...
            </div>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
