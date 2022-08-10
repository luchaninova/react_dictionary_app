import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function hendlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiLink = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiLink).then(handleResponse);

    let pexelsApiKey = `563492ad6f9170000100000132ed89aefba540c0807dccacdf73b469`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    let pexelsApiLink = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiLink, { headers: headers }).then(hendlePexelsResponse);
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
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">Suggested words: sun, forest, ets.</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
