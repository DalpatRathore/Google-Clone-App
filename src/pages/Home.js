import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "./Search";

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="home">
      <div className="home__header">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon></AppsIcon>
        {isLogin ? (
          <Avatar onClick={e => setIsLogin(false)}></Avatar>
        ) : (
          <Link to="/login">
            <Button
              onClick={e => setIsLogin(true)}
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
          </Link>
        )}
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
