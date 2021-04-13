import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = () => {
  const inputRef = useRef("");
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  // console.log(" history :>> ", history);

  const search = e => {
    e.preventDefault();
    if (input) {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
      history.push(`/search?term=${input}`);
      document.title = `${input} - Google Search`;
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  });

  const doodles = e => {
    e.preventDefault();
  };

  return (
    <form className="search" autoComplete="on">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" onClick={search}></SearchIcon>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <KeyboardVoiceIcon className="search__inputIcon"></KeyboardVoiceIcon>
      </div>
      <div className="search__buttons">
        <Button type="submit" variant="outlined" onClick={search}>
          Google Search
        </Button>
        <Button type="submit" variant="outlined" onClick={doodles}>
          I'm Feeling Lucky
        </Button>
      </div>
    </form>
  );
};

export default Search;
