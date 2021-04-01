import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon></AppsIcon>
          <Avatar></Avatar>
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg"
          alt=""
        />
        <div className="home__inputContainer">
          <Search></Search>
        </div>
      </div>
    </div>
  );
};

export default Home;
