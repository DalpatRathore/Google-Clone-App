import React, { useState } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { actionTypes } from "../reducer";
import { useHistory } from "react-router";
import PaginationLinks from "../components/PaginationLinks";

const SearchPage = () => {
  const [{ term, startIndex }, dispatch] = useStateValue();
  const [input, setInput] = useState(term);
  const history = useHistory();
  const { data, loading } = useGoogleSearch(term, startIndex);
  const search = e => {
    e.preventDefault();
    if (input) {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input,
        startIndex: 1,
      });
      history.push(`/search?term=${input}&page=1`);
      document.title = `${input} - Google Search`;
    }
  };

  // search?term=${searchTerm}&start=${startIndex + 10}
  const searchReset = () => {
    setInput("");
  };
  // console.log("loading :>> ", loading);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <div className="searchPage__headerLeft">
          <Link to="/">
            <img className="searchPage__logo" src={logo} alt="google logo" />
          </Link>
          <div className="searchPage__headerBody">
            <form className="searchPage__form">
              {input && (
                <SearchIcon className="searchPage__inputIcon "></SearchIcon>
              )}
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              {input && (
                <CloseIcon
                  onClick={searchReset}
                  className="searchPage__inputIcon searchPage__inputIcon--clear"
                ></CloseIcon>
              )}

              <MicIcon className="searchPage__inputIcon"></MicIcon>
              <SearchIcon className="searchPage__inputIcon"></SearchIcon>
              <button
                onClick={search}
                type="submit"
                className="searchPage_submitButton"
              >
                search
              </button>
            </form>
            <div className="searchPage__options">
              <div className="searchPage__optionsLeft">
                <div className="searchPage__option searchPage__option--active">
                  <SearchIcon></SearchIcon>
                  <span>All</span>
                </div>
                <div className="searchPage__option">
                  <DescriptionIcon></DescriptionIcon>
                  <span>News</span>
                </div>
                <div className="searchPage__option">
                  <ImageIcon></ImageIcon>
                  <span>Images</span>
                </div>
                <div className="searchPage__option">
                  <LocalOfferIcon></LocalOfferIcon>
                  <span>Books</span>
                </div>
                <div className="searchPage__option">
                  <RoomIcon></RoomIcon>
                  <span>Maps</span>
                </div>
                <div className="searchPage__option">
                  <MoreVertIcon></MoreVertIcon>
                  <span>More</span>
                </div>
              </div>
              <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                  <span>Settings</span>
                </div>
                <div className="searchPage__option">
                  <span>Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchPage__headerRight">
          <AppsIcon></AppsIcon>
          <Button variant="contained" color="primary">
            Sign in
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="loading">
          <span></span>
          <h1>Google Clone</h1>
        </div>
      ) : (
        <>
          <div className="searchPage__results">
            <p className="searchPage__resultCount">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds)
            </p>
            {data?.items.map((item, index) => (
              <div className="searchPage__result" key={index}>
                <a
                  href={item.link}
                  className="searchPage__resultWebLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        src={
                          item.pagemap?.cse_image?.length > 0 &&
                          item.pagemap?.cse_image[0]?.src
                        }
                        alt=""
                        className="searchPage__resultImage"
                      />
                    )}

                  {item.displayLink}
                </a>
                <a
                  className="searchPage__resultTitle"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            ))}
          </div>
          <PaginationLinks
            searchTerm={term}
            index={startIndex}
          ></PaginationLinks>
        </>
      )}
    </div>
  );
};

export default SearchPage;
