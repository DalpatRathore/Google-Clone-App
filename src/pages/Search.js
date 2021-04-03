import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{ state }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = e => {
    e.preventDefault();
    // alert(input);
    if (input) {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
      });
      history.push(`/search/${input}`);
    }
  };
  const doodles = e => {
    e.preventDefault();
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon"></SearchIcon>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <KeyboardVoiceIcon className="search__inputIcon"></KeyboardVoiceIcon>
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button type="submit" variant="outlined" onClick={doodles}>
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button
            type="submit"
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
