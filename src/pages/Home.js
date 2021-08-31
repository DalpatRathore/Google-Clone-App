import React from "react";
import logo from "../logo.png";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <Link to="/">Gmail</Link>
        <Link to="/">Images</Link>
        <AppsIcon></AppsIcon>
        <Button variant="contained" color="primary">
          Sign in
        </Button>
      </div>
      <div className="home__body">
        <img src={logo} alt="google logo" />
        <div className="home__inputContainer">
          <Search></Search>
        </div>
      </div>
    </div>
  );
};

export default Home;
