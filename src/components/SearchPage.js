import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Button } from "@material-ui/core";
import Search from "../pages/Search";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Footer from "../pages/Footer";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  /*  ---- Live API for Google Search Results ----- */
  // const { data } = useGoogleSearch(term);

  /* ----- Mock API for Google Search Results ---- */
  const data = Response;

  // console.log(data);

  // console.log("Requests ", data.queries.request);
  // console.log("NextPage ", data.queries.nextPage);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <div className="searchPage__headerLeft">
          <Link to="/">
            <img
              className="searchPage__logo"
              src="https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg"
              alt=""
            />
          </Link>
          <div className="searchPage__headerBody">
            <Search hideButtons input></Search>
            <div className="searchPage__options">
              <div className="searchPage__optionsLeft">
                <div className="searchPage__option searchPage__option--active">
                  <SearchIcon></SearchIcon>
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPage__option">
                  <DescriptionIcon></DescriptionIcon>
                  <Link to="/news">news</Link>
                </div>
                <div className="searchPage__option">
                  <ImageIcon></ImageIcon>
                  <Link to="/images">images</Link>
                </div>
                <div className="searchPage__option">
                  <LocalOfferIcon></LocalOfferIcon>
                  <Link to="/shopping">shopping</Link>
                </div>
                <div className="searchPage__option">
                  <RoomIcon></RoomIcon>
                  <Link to="/maps">maps</Link>
                </div>
                <div className="searchPage__option">
                  <MoreVertIcon></MoreVertIcon>
                  <Link to="/more">more</Link>
                </div>
              </div>
              <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                  <Link to="/setting">Settings</Link>
                </div>
                <div className="searchPage__option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchPage__headerRight">
          <AppsIcon></AppsIcon>
          <Button
            // onClick={e => setIsLogin(true)}
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About{data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item, index) => (
            <div className="searchPage__result" key={index}>
              <a href={item.link} className="searchPage__resultWebLink">
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
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default SearchPage;
